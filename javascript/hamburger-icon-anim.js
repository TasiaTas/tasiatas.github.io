/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const hamburger = document.querySelector(".hamburger-icon");
const navbarModal = document.getElementById("NAVBAR-modal");
const navbarModalWrapper = document.getElementById("navbar-content-wrapper");
const navbarIconWrapper = document.getElementById("navbar-icons-wrapper");


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");

    //check if hidden modal to activate or not
    if(navbarModal.classList.contains("active")) {
        navbarModal.style.opacity = 0;
        navbarIconWrapper.style.transform = "translateY(100%)";
        navbarModalWrapper.style.transform = "translateY(5%)";

        //let the fade out happen slowly but control it responsively to toggle modal back up if user clicks quickly
        navbarModal.addEventListener("transitionend", function handler() {
            navbarModal.classList.remove("active");
            navbarModal.style.opacity = "";
            navbarModalWrapper.style.transform = "";
            navbarIconWrapper.style.transform = "";
            document.body.style.overflow = "auto";
            navbarModal.removeEventListener("transitionend", handler);
        })
    }else {
        navbarModal.classList.add("active");
        navbarModal.style.opacity = "";
        navbarModalWrapper.style.transform = "";
        navbarIconWrapper.style.transform = "";
        document.body.style.overflow = "hidden";
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function to see if we change from mobile to computer and the navbar-modal was activated (need to collapse it)
function handleVisibility(e){
    if(e.matches && navbarModal.classList.contains("active")){
        navbarModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

//Run the handleVisibility once when loading page first time
handleVisibility(desktopQuery);

//Add listener to check when we change between devices to know if we have to collapse quickly the navbar modal
//desktopQuery const variable is in modal.js
desktopQuery.addEventListener("change", handleVisibility);