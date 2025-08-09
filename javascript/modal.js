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
var screenWidth = window.innerWidth;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//check any image clicked to open modal
document.querySelectorAll(".artItem-div img").forEach((img,index) => {
    img.addEventListener("click", () => {
        //get index of image we're at
        artIndex = index;

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

/*if(screenWidth > 430){
    //check where the user is clicking on the screen
    modal.addEventListener("click", function (event) {
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
    })
}*/

//change to content of image on the left
function leftSwipe() {

    //verify index to which we move to
    if(artIndex === 0){
        artIndex = artworks.length - 1;
    }else{
        artIndex--;
    }

    //call for change
    changeModalContent();
}

//change to content of image on the right
function rightSwipe () {

    //verify index to which we move to
    if(artIndex === artworks.length - 1){
        artIndex = 0;
    }else{
        artIndex++;
    }

    //call for change
    changeModalContent();
}

//press cross in span and close modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
}

//function to update modal content
function changeModalContent(){

    //get the image associated to the one clicked
    const art = artworks[artIndex];

    //set the new title
    modalTitle.innerHTML = "";
    modalTitle.textContent = art.title;

    //set paragraph content (can have one or multiple paragraphs)
    modalText.innerHTML = "";
    art.paragraphs.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        modalText.appendChild(p);
    })

    //set image (or change for video)
    if(art.type === 'image'){
        modalImg.src = art.src;
    }else if(art.type === 'video'){
        video.src = art.src;
        video.controls = true;
        video.autoplay = true;

        //replace img with video
        modalImg.replaceWith(video);
        modalImg = video;
    }

    //make the modal visible and hide the background scroll
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

//Run the updateSwipe once when loading page first time
updateSwipe(desktopQuery);

//Add listener to check when we change between devices to knwo if swipe is okay or not
desktopQuery.addEventListener("change", updateSwipe);