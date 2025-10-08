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
/*
//LEG
const legImgSwap = document.getElementById("leg").querySelector("img");
let legFrameIndex = 0;
let legAnimInterval = null;
let continueLegAnim = true;

//EYES

//STEAM

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LEG ANIM CONTROLS*****************************************************************************************************
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


//RANDOM TIME FUNCTION**************************************************************************************************
function randomIntFromInterval(min, max){ //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
 */

/*ERASEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/
const noticeBoard = document.getElementById("noticeBoard");
let angle = 0;
let velocity = 0;
let amplitude = 15;   // initial swing degrees
let damping = 0.98;   // how fast it slows down
let swinging = false;

function startSwing() {

    // reset everything
    swinging = true;
    amplitude = 15;
    angle = 0;
    startTime = null;

    // reset transform instantly to prevent visible jump
    noticeBoard.style.transform = "rotate(0deg)";

    // start again
    swingFrame = requestAnimationFrame(animateSwing);
}

let startTime = null;
function animateSwing(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    angle = amplitude * Math.sin(elapsed / 200);
    amplitude *= damping;

    noticeBoard.style.transform = `rotate(${angle}deg)`;

    if (Math.abs(amplitude) > 0.1) {
        requestAnimationFrame(animateSwing);
    } else {
        noticeBoard.style.transform = "rotate(0deg)";
        swinging = false;
        startTime = null;
    }
}

// Trigger when entering viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) startSwing();
    });
}, { threshold: 0.5 });

observer.observe(noticeBoard);