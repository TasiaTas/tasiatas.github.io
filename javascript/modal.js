/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const modal = document.getElementById("artModal");
let modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
var span = document.getElementsByClassName("close-button")[0];
//var leftSwipe = document.getElementsByClassName("modal-nav left-nav");
//var rightSwipe = document.getElementsByClassName("modal-nav right-nav");

var artIndex = 0;

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

//check where the user is clicking on the screen
modal.addEventListener("click", function (event) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenWidth = window.innerWidth;
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

    //make the modal visible
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}