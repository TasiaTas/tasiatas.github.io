/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const modal = document.getElementById("artModal");
let modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalButton = document.getElementById("modalButton");
const modalText = document.getElementById("modalText");
var span = document.getElementsByClassName("close-button")[0];
const desktopQuery = window.matchMedia("(min-width: 431px)");

var artIndex = 0;
var arrayRef = "";
var screenWidth = window.innerWidth;
var scrollPos = 0;

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
    }else if(clickX <= screenWidth/4){
        leftSwipe();
    }else if(clickX >= screenWidth/4){
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
    //check if there was an iframe when closing to unload it
    const iframe = modal.querySelector("iframe");
    if(iframe){
        iframe.src = "";
    }

    //clean everything
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

//mouse scroll control
modal.addEventListener("wheel", (e) =>{
    //find the content to scroll on
    const content = modal.querySelector(".modal-content");

    //if found, scroll
    if (content) {
        e.preventDefault();

        //smoothly scroll animation
        const scrollAmount = e.deltaY;
        const start = content.scrollTop;
        const duration = 200; // in ms
        let startTime;

        function smoothScroll(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            content.scrollTop = start + (scrollAmount * progress);
            if (progress < 1) requestAnimationFrame(smoothScroll);
        }

        requestAnimationFrame(smoothScroll);
    }
}, { passive: false });

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
        p.innerHTML = paragraph;
        modalText.appendChild(p);
    })

    //set image (or change for video)
    if(accessedArt.type === 'image'){
        const img = document.createElement("img");
        img.id = "modalImg";
        img.src = accessedArt.src;
        img.style.width = "100%";
        img.style.maxHeight = "75vh";
        img.style.objectFit = "contain";

        //replace video with img
        modalImg.replaceWith(img);
        modalImg = img;

    }else if(accessedArt.type === 'video'){
        const iframe = document.createElement("iframe");
        iframe.src = accessedArt.src.replace("youtu.be/", "www.youtube.com/embed/") + "?autoplay=1&controls=1&rel=0";
        iframe.width = "80%";
        iframe.height = "auto";
        iframe.style.aspectRatio = "16/9";
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;
        iframe.frameBorder = "0";
        //put it on top of everything so user can control video
        iframe.style.zIndex = "20";

        //replace img with video
        modalImg.replaceWith(iframe);
        modalImg = iframe;
    }

    //set the button. If it exists in the array position we set it, if not we hide it
    if(accessedArt.btn){
        modalButton.textContent = accessedArt.btn.label;
        modalButton.onclick = () => window.open(accessedArt.btn.url, "_blank");
        modalButton.style.display = "block";
    }else{
        modalButton.style.display = "none";
    }

    //save pos scrolling
    scrollPos = window.scrollY || document.documentElement.scrollTop || 0;

    //make the modal visible and hide the background scroll
    modal.style.display = "block";
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

//function to control a pseudo array that contains only the visible content selected by user
function getVisibleArtworks(arrayName){
    const allItems = Array.from(document.querySelectorAll(`.artItem-div img[data-name="${arrayName.replace(/_.+$/, '')}"]`)); //clean name so it can coincide with the name inside the html (no language suffix _en, _es, _ru)
    const visibleItems = allItems.filter(img => img.closest(".artItem-div").style.display !== "none"); //only het the img that are visible right now
    const fullArray = window.artworksAccess[arrayName]; //get the array with everything to swap in the modal

    //return only artworks of img visible
    return fullArray.filter((art, i) => {
        const match = visibleItems.find(v => parseInt(v.dataset.index, 10) === i);
        return !!match; //for boolean conversion
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//check any image/vid clicked to open modal
document.querySelectorAll(".artItem-div img, .artItem-div div").forEach((img) => {
    img.addEventListener("click", () => {
        const arrayName = img.dataset.name + "_" + document.documentElement.lang;

        //create a filtered array that matches the visible items
        arrayRef = getVisibleArtworks(arrayName);

        //figure out where the clicked artwork is in that filtered list
        const fullArray = window.artworksAccess[arrayName];
        const clickedArt = fullArray[parseInt(img.dataset.index, 10)];
        artIndex = arrayRef.indexOf(clickedArt);

        //show modal
        changeModalContent();
    });
});