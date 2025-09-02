/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ARRAYS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let spriteLegArray=[
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808802/Idle_1_wuwh5v.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808802/Idle_2_izteab.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808802/Idle_3_t56fyj.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808802/Idle_4_uifw4h.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808802/Idle_5_v2ice0.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808801/Idle_6_up3d8w.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808801/Idle_7_r3n1yb.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808802/Idle_8_rmnbj0.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808801/Idle_9_gjarvp.png",
    "https://res.cloudinary.com/dxzxf0rwv/image/upload/v1756808801/Idle_10_ro1imo.png",
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