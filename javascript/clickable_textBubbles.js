/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const clickableObj = document.getElementById("leg"); //change to the one that is always on top
const speechBubbleVisibility = document.querySelectorAll(".speechBub");
const leftBubText = document.getElementById("leftBub");
const rightBubText = document.getElementById("rightBub");
const desktopQuery570 = window.matchMedia("(max-width: 571px)")

var messageToDisplay = "";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
clickableObj.addEventListener("click", e => {
    if(desktopQuery570.matches){//for when on smaller screens, only use bubble 2
        speechBubbleVisibility[0].style.visibility = "hidden";
        speechBubbleVisibility[1].style.visibility = "visible";
    }else{//when on bigger screens, use both

        //first, get the needed message
        randomMessage(firstTextarray);

        //show bubbles then
        speechBubbleVisibility.forEach(bub => {
            bub.style.visibility = "visible";
            bub.innerHTML = messageToDisplay;
        })

        //wait the calculated time before hiding them
        setTimeout(() => {
            //hide bubbles once they have been shown
            speechBubbleVisibility.forEach(bub => {
                bub.style.visibility = "hidden";
            })
        }, messageTime(messageToDisplay));
    }
})

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

    return messageToDisplay;
}