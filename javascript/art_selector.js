/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const checkboxes = document.querySelectorAll(".filter-checkbox");
const artItems = document.querySelectorAll(".artItem-div");
var numImgGoofy = 0;
var deactivatedImgGoofy = true;

//timer ID
let timerId = null;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//checkboxes function
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const activeFilters = Array.from(checkboxes)
        .filter(c => c.checked)
        .map(c => c.value);

        artItems.forEach(artItem => {
            const img = artItem.querySelector('img');
            const category = img.dataset.category;

            if(activeFilters.includes(category)) {
                //quick check to not make unnecessary calls
                if(!deactivatedImgGoofy){
                    displayImageHide();
                    deactivatedImgGoofy = true;
                }
                artItem.style.display = "inline-block";
            }else{
                artItem.style.display = "none";

                //only let 1 goofy image be created when none displayed
                if(activeFilters.length === 0) {
                    if(numImgGoofy < 1) {
                        displayImage();
                        deactivatedImgGoofy = false;
                    }
                }
            }
        })
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function to display image when user chooses none
function displayImage(){
    var imgContainer = document.getElementById("goofyWrapper");

    imgContainer.style.display = "flex";
    numImgGoofy++;

    //call to the function to set in motion the animations in script goofyImg_anim_control.js
    randomLegActivation(true);

    //simulate a click so the character speaks first without the user clicking, script activating: clickable_textBubble.js
    isBusyFlag = true; //prohibit user click until the first pseudo-click, from the clickable script
    timerId = setTimeout(() => {
        nextAnnoyedAt = Date.now() + annoyedCooldown; //once we start, we calculate when the character will be annoyed the first time
        isBusyFlag = false;
        clickableObj.click();
    },500);
}

//function to hide the displayed image when user chooses art again
function displayImageHide(){
    var imgContainer = document.getElementById("goofyWrapper");

    imgContainer.style.display = "none";
    numImgGoofy = 0;

    //deactivate this page timer so it can be set again if returned to the goofy section
    if(timerId){
        clearTimeout(timerId);
        timerId = null;
    }

    //call to the function to stop the animations in script goofyImg_anim_control
    randomLegActivation(false);
    hideAndCleanBubbles();

    //clean the annoyance system
    nextAnnoyedAt = 0;
}