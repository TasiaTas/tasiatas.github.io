/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const modal = document.getElementById("artModal");
let modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
var span = document.getElementsByClassName("close-button")[0];
const desktopQuery = window.matchMedia("(min-width: 431px)");

var artIndex = 0;
var arrayRef = "";
var screenWidth = window.innerWidth;
var scrollPos = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//check any image clicked to open modal
document.querySelectorAll(".artItem-div img").forEach((img) => {
    img.addEventListener("click", () => {
        //get index of image we're at
        artIndex = parseInt(img.dataset.index, 10);
        //get the array name we're at depending on the html and, thus, the array we have access to
        const arrayName = img.dataset.name;
        arrayRef = window.artworksAccess[arrayName];

        //call function to change content and make it visible
        changeModalContent();
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function to remove or activate swipe of pseudo-modals
function updateSwipe(e){
    if(e.matches){
        //desktop = enabled
        modal.addEventListener("click",handleSwipe);
    }else{
        //mobile = disabled
        modal.removeEventListener("click",handleSwipe);
    }
}

//mobile modal swipe blocked, only check for bigger screens
function handleSwipe(){
    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenHeight = window.innerHeight;

    //left side click (top of the screen has none to be able to close the damn modal)
    if(clickY <= screenHeight/4){
        return;
    }else if(clickX <= screenWidth/2){
        leftSwipe();
    }else{
        rightSwipe();
    }
}

//change to content of image on the left
function leftSwipe() {

    //verify index to which we move to
    //remember they are inverted in the html so we display the most recent artwork
    if(artIndex === arrayRef.length - 1){
        artIndex = 0;
    }else{
        artIndex++;
    }

    //call for change
    changeModalContent();
}

//change to content of image on the right
function rightSwipe () {

    //verify index to which we move to
    //remember they are inverted in the html so we display the most recent artwork
    if(artIndex === 0){
        artIndex = arrayRef.length - 1;
    }else{
        artIndex--;
    }

    //call for change
    changeModalContent();
}

//press cross in span and close modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    //restore scroll pos
    window.scrollTo(0,scrollPos);
}

//function to update modal content
function changeModalContent(){

    //accessed artwork
    const accessedArt = arrayRef[artIndex];

    //set the new title
    modalTitle.innerHTML = "";
    modalTitle.textContent = accessedArt.title;

    //set paragraph content (can have one or multiple paragraphs)
    modalText.innerHTML = "";
    accessedArt.paragraphs.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        modalText.appendChild(p);
    })

    //set image (or change for video)
    if(accessedArt.type === 'image'){
        modalImg.src = accessedArt.src;
    }else if(accessedArt.type === 'video'){
        video.src = accessedArt.src;
        video.controls = true;
        video.autoplay = true;

        //replace img with video
        modalImg.replaceWith(video);
        modalImg = video;
    }

    //save pos scrolling
    scrollPos = window.scrollY || document.documentElement.scrollTop || 0;

    //make the modal visible and hide the background scroll
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPos}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
}

//Run the updateSwipe once when loading page first time
updateSwipe(desktopQuery);

//Add listener to check when we change between devices to know if swipe is okay or not
desktopQuery.addEventListener("change", updateSwipe);