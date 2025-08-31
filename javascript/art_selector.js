/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const checkboxes = document.querySelectorAll('.filter-checkbox');
const artItems = document.querySelectorAll('.artItem-div');
var numImgGoofy = 0;
var deactivatedImgGoofy = true;

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
                //se hace la comprobacion rapida para no hacer multiples llamadas innecesarias
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

    //call to the function to set in motion the animations in script goofyImg_anim_control
    randomLegActivation(true);
}

//function to hide the displayed image when user chooses art again
function displayImageHide(){
    var imgContainer = document.getElementById("goofyWrapper");

    imgContainer.style.display = "none";
    numImgGoofy = 0;

    //call to the function to stop the animations in script goofyImg_anim_control
    randomLegActivation(false);
}