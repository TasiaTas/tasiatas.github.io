/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let imgToChange = document.getElementById("imgTasiaHover");
let imgToChange2 = document.getElementById("imgTasiaHover2");
let isFirstVisible = true;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
imgToChange.addEventListener("mouseenter", () => {
    if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
        imgToChange.style.opacity = "0";
        imgToChange2.style.opacity = "1";
        isFirstVisible = false;
    }
});

imgToChange.addEventListener("mouseleave", () => {
    if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
        imgToChange.style.opacity = "1";
        imgToChange2.style.opacity = "0";
        isFirstVisible = true;
    }
});

//this one is only for mobile and similar because we can only tap
imgToChange.addEventListener("click", () => {
    if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
        if(isFirstVisible){
            imgToChange.style.opacity = "0";
            imgToChange2.style.opacity = "1";
        }else{
            imgToChange.style.opacity = "1";
            imgToChange2.style.opacity = "0";
        }
        isFirstVisible = !isFirstVisible;
    }
});