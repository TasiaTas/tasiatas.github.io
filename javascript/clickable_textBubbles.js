/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const clickableObj = document.getElementById("leg"); //change to the one that is always on top
const speechBubbles = document.querySelectorAll(".speechBub");
const desktopQuery570 = window.matchMedia("(max-width: 571px)");
const userOrigin = document.querySelector(".category-selection"); //to get the selector it comes from

var messageToDisplay = "";
var isBusyFlag = false;
var returnAccess = true;
const firstAccessKey = "characterFirstVisit"; //this uses localStorage for character memory

//annoyance system
let annoyedLevel = 0;
let repeatLevel = 1;
let maxLevel = 3;
const annoyedCooldown = 20 * 1000; //secs between messages of annoyance is 20s
var nextAnnoyedAt = 0;

//user idle system
const idleCooldown = 20 * 1000; //secs between messages of being bored is 20s
let idleTimerID = null;
var flagBoredMessageDisplayedAndClick = false;

//timers ids for breaking the loop
let hideBubbleTimeoutID = null;
let hideSecondaryBubbleTimeoutID = null;
let waitSecBubbleTimeoutID = null;

//arrays
const userOriginArray = [
    "conceptArt",
    "ui",
    "3d",
    "games"
];

const clickableMessageArrayOfArrays = [
    normalTextArray,
    loreTextArray,
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
clickableObj.addEventListener("click", e => {
    //check if bored message is being displayed before letting user pop new message
    if(flagBoredMessageDisplayedAndClick) return;

    //call to the idler resetting countdown to stop bored message appearing
    idleReset();

    //check if already clicked and ignore other clicks until finished
    if(isBusyFlag) return;
    isBusyFlag = true;

    //capture time of each click
    const now = Date.now();

    //first, get the needed message from the corresponding messageArray by checking annoyance levels or normalcy
    if(now >= nextAnnoyedAt) {
        randomMessage(annoyedTextArray[annoyedLevel]);

        //shorten cooldown for next annoyed message
        nextAnnoyedAt = now + annoyedCooldown;

        //make the annoyed level higher where lvl 1 and lvl 2 repeat twice before staying at lvl 3 annoyance
        if(repeatLevel <= 0 && annoyedLevel < maxLevel) {
            annoyedLevel++;
            repeatLevel = 2;
        }else if (annoyedLevel < maxLevel) {
            repeatLevel--;
        }

    }else{
        randomMessage(chooseMessageArray());
    }

    //catch if we're in the first pseudo-click to change that now that we selected the array for the first time
    /*if(firstAccessKey) {
        firstAccessKey = false;
    }*/

    //check if we're returning into the goofy section to lock the return flag access
    if(returnAccess){
        returnAccess = false;
    }

    //check if the message is a 2 part message and needs both bubbles or not
    messageLogicDisplay();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//humans read, on average, 3-4 words per second, so we count the number of words in the sentence
function countWords(str){
    return str.trim().split(/\s+/).length;
}

//calculate time of message
function messageTime(message){
    const baseTime = 2000; //min 2 sec
    const timePerWord = 250; // 1/4 a sec for each word (we use 4 words per sec)

    var wordCount = countWords(message);
    return baseTime + wordCount * timePerWord;
}

//choose random message depending on array length
function randomMessage(array){
    var length = array.length;
    var index = Math.floor(Math.random()*length);
    messageToDisplay = array[index];
}

//function to wait X time before letting user click for a new message
function waitForNewMessage(){
    waitSecBubbleTimeoutID = setTimeout(() => {
        isBusyFlag = false;
        flagBoredMessageDisplayedAndClick = false;
    }, 1000);
}

//display message
function displayMessage(chosenBubble, message){
    speechBubbles[chosenBubble].classList.remove("hide");
    speechBubbles[chosenBubble].classList.add("show");
    speechBubbles[chosenBubble].innerHTML = message;
}

//hide message
function hideMessage(chosenBubble, message, wait){
    //wait the calculated time before hiding the bubble
    hideBubbleTimeoutID = setTimeout(() => {
        speechBubbles[chosenBubble].classList.remove("show");
        speechBubbles[chosenBubble].classList.add("hide");

        //check  if you have to wait for secondary bubble or not to finish before activating user click
        if(!wait){
            waitForNewMessage();
        }
    }, messageTime(message));
}

//choose array from which to pull the message
function chooseMessageArray(){
    var chosenArray = "";

    if(!localStorage.getItem(firstAccessKey)){
        //depending on where the user comes from, the first message belongs to a different array
        if(userOrigin.getAttribute("data-origin") === userOriginArray[0] ||
            userOrigin.getAttribute("data-origin") === userOriginArray[2]){
            chosenArray = firstTextArrayConceptArt;
        }else if(userOrigin.getAttribute("data-origin") === userOriginArray[1] ||
            userOrigin.getAttribute("data-origin") === userOriginArray[3]){
            chosenArray = firstTextArrayDaring;
        }
        //save data persistence from first visit (character memory)
        localStorage.setItem(firstAccessKey, "true");
    }else if(returnAccess){
        //depending on where the user comes from, the return message belongs to a different array
        if(userOrigin.getAttribute("data-origin") === userOriginArray[0] ||
            userOrigin.getAttribute("data-origin") === userOriginArray[2]){
            chosenArray = returnTextArrayConceptArt;
        }else if(userOrigin.getAttribute("data-origin") === userOriginArray[1] ||
            userOrigin.getAttribute("data-origin") === userOriginArray[3]){
            chosenArray = returnTextArrayDaring;
        }
    }else{
        chosenArray = clickableMessageArrayOfArrays[Math.floor(Math.random() * 2)];
    }

    return chosenArray;
}

//message logic display function
function messageLogicDisplay(){
    if(Array.isArray(messageToDisplay)) {
        displayMessage(1, messageToDisplay[0]);
        hideMessage(1, messageToDisplay[0], true);

        //wait 3/4th of the time of the first message before displaying the second one
        hideSecondaryBubbleTimeoutID = setTimeout(() => {
            displayMessage(0, messageToDisplay[1]);
            hideMessage(0, messageToDisplay[1], false);
        }, messageTime(messageToDisplay[0]) - messageTime(messageToDisplay[0])/10);

    }else{
        //always show message on right bub if only 1 text and on mobile
        if(desktopQuery570.matches){
            speechBubbles[0].classList.add("hide");
            speechBubbles[0].classList.remove("show");

            displayMessage(1, messageToDisplay);
            hideMessage(1, messageToDisplay, false);

        }else{
            //show selected random bubble with message
            var chosenRandomBubble = Math.floor(Math.random() * 2);
            displayMessage(chosenRandomBubble, messageToDisplay);
            hideMessage(chosenRandomBubble, messageToDisplay, false);
        }
    }
}

//idle function for bored messages reset
function idleReset(){
    //first, we clear the timer as the function has been called again (user has clicked/tapped)
    clearTimeout(idleTimerID);
    idleTimerID = null;

    //set new timer for bored message countdown
    idleTimerID = setTimeout(() => {
        randomMessage(boredTextArray);
        flagBoredMessageDisplayedAndClick = true; //to control message bored being displayed well till it disappears
        nextAnnoyedAt = Date.now() + annoyedCooldown; //move the nextAnnoyed message further in time
        annoyedLevel = 0; //reset annoyed level
        messageLogicDisplay();
        idleReset();
    }, idleCooldown);
}

//hide bubbles and clean slate if user returns to browse art (user hides the goofy character)
function hideAndCleanBubbles(){
    //stop the timers
    if(hideBubbleTimeoutID){
        clearTimeout(hideBubbleTimeoutID);
        hideBubbleTimeoutID = null;
    }

    if(hideSecondaryBubbleTimeoutID){
        clearTimeout(hideSecondaryBubbleTimeoutID);
        hideSecondaryBubbleTimeoutID = null;
    }

    if(waitSecBubbleTimeoutID){
        clearTimeout(waitSecBubbleTimeoutID);
        waitSecBubbleTimeoutID = null;
    }

    if(idleTimerID){
        clearTimeout(idleTimerID);
        idleTimerID = null;
    }

    //hide the bubbles
    speechBubbles.forEach(bub => {
        bub.classList.remove("show");
        bub.classList.add("hide");
        isBusyFlag = false;
    });

    //set the return visit to true (first access is not reset because it is only for when you reload page)
    returnAccess = true;
}