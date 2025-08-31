/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ARRAYS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let spriteLegArray=[
    "assets/spritesheet/idle_1.png",
    "assets/spritesheet/idle_2.png",
    "assets/spritesheet/idle_3.png",
    "assets/spritesheet/idle_4.png",
    "assets/spritesheet/idle_5.png",
    "assets/spritesheet/idle_6.png",
    "assets/spritesheet/idle_7.png",
    "assets/spritesheet/idle_8.png",
    "assets/spritesheet/idle_9.png",
    "assets/spritesheet/idle_10.png",
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*LEG*/
const legImgSwap = document.getElementById("leg").querySelector("img");
let legFrameIndex = 0;
let legAnimInterval = null;
let continueLegAnim = true;

/*EYES*/

/*STEAM*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*LEG ANIM CONTROLS*****************************************************************************************************/
function playLegAnimation(){
    //wait for loop to finish playing
    if(legAnimInterval) return;

    //move through the img array of the leg
    legFrameIndex = 0;
    legAnimInterval = setInterval(() => {
        legImgSwap.src = spriteLegArray[legFrameIndex];
        legFrameIndex++;

        //stop after last frame and set img 0
        if(legFrameIndex >= spriteLegArray.length-1){
            clearInterval(legAnimInterval);
            legAnimInterval = null;
            legFrameIndex = 0;
            legImgSwap.src = spriteLegArray[legFrameIndex];
        }
    }, 100) //100ms per frame
}

function randomLegActivation(activate){
    continueLegAnim = activate;

    if(activate === true){
        setTimeout(() => {
            playLegAnimation();
            randomLegActivation(continueLegAnim);
        }, randomIntFromInterval(1000,10000));
    }
}


/*RANDOM TIME FUNCTION**************************************************************************************************/
function randomIntFromInterval(min, max){ //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}