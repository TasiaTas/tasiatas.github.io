//IMPORTANT: language for modals is managed in modal.js
//IMPORTANT: language for text bubbles is managed in clickable_textBubbles.js
//IMPORTANT: language for error messages to send a form/email is managed in formsValidation.js

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const langBtn = document.querySelector('.currentLang');
const langMenu = document.querySelector('.langMenu');
const firstLangChoice = document.getElementById("firstLang");
const secondLangChoice = document.getElementById("secondLang");
const htmlFileName = document.body.dataset.page;

//for accordion to work correctly
let menuTimer = null;
let clicked = false;

//dictionary of arrays for translation choosing
const translations = {
    en:{
        base: engTranslationBase,
        index: engTranslationUpdatableIndexHTML,
        ui: engTranslationUpdatableUiHTML,
        threeD: engTranslationUpdatable3dHTML,
        games: engTranslationUpdatableGamesHTML,
        about: engTranslationUpdatableAboutHTML,
        form: engTranslationUpdatableFormSentHTML
    },
    es:{
        base: espTranslationBase,
        index: espTranslationUpdatableIndexHTML,
        ui: espTranslationUpdatableUiHTML,
        threeD: espTranslationUpdatable3dHTML,
        games: espTranslationUpdatableGamesHTML,
        about: espTranslationUpdatableAboutHTML,
        form: espTranslationUpdatableFormSentHTML
    },
    ru:{
        base: rusTranslationBase,
        index: rusTranslationUpdatableIndexHTML,
        ui: rusTranslationUpdatableUiHTML,
        threeD: rusTranslationUpdatable3dHTML,
        games: rusTranslationUpdatableGamesHTML,
        about: rusTranslationUpdatableAboutHTML,
        form: rusTranslationUpdatableFormSentHTML
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Language change according to what was clicked (user choice)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//chose first section language
firstLangChoice.addEventListener("click", () => {
    languageSwitch(firstLangChoice.textContent);
});

//chose second section language
secondLangChoice.addEventListener("click", () => {
    languageSwitch(secondLangChoice.textContent);
});

//Language accordion function
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//button click to show the accordion
langBtn.addEventListener('click', () => {

    //listen to if user clicked the button again or not
    if (clicked){
        //reset accordion state
        resetAccordionState(); //clicked=false inside this function

    }else{
        //indicate we clicked
        clicked = true;

        //only let the timer be activated when we're on mobile
        if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
            //clear timer always just in case
            clearTimeout(menuTimer);

            //toggle menu
            langMenu.classList.toggle('show');

            //set timer if it has been triggered visible
            if(langMenu.classList.contains('show')) {
                menuTimer = setTimeout(() => {
                    langMenu.classList.remove('show');
                    clicked = false;
                },2000);
            }
        }
    }
});

//Accordion hover listener across devices
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//deactivate hover on mobile for the button so there is no style fighting
updateHoverCapability();

//listen for screen changes so we block or let the hover of the accordion work
window.matchMedia("(hover: none)").addEventListener("change", updateHoverCapability);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function to activate or deactivate the hover functionality of the language button/accordion
function updateHoverCapability() {
    if (window.matchMedia("(hover: none)").matches) {
        //reset accordion state
        resetAccordionState();

        //device doesn't support hover (means we're in mobile and similar)
        document.body.classList.add("no-hover");
    } else {
        //reset accordion state
        resetAccordionState();

        //device supports hover so probably desktop and similar
        document.body.classList.remove("no-hover");
    }
}

//accordion state reset function
function resetAccordionState(){
    clearTimeout(menuTimer);
    menuTimer = null;
    langMenu.classList.remove('show');
    clicked = false;
}

//function to change the language
function languageSwitch(chosenLanguage){
    if(chosenLanguage === "Inglés" || chosenLanguage === "Английский"){
        //set html lang to en
        document.documentElement.setAttribute("lang", "en");
        //change the link to the corresponding thank you page depending on the language if we're in about.html
        if(htmlFileName === "about"){
            const form = document.querySelector("form");
            const redirectInput = form.querySelector("input[name=redirect]");
            redirectInput.value = "https://htmlpreview.github.io/?https://raw.githubusercontent.com/TasiaTas/tasiatas.github.io/refs/heads/redesign/html_ENG/formSent.html&lang=en" //WHEN YOU CHANGE THE LINKS TO THE CORRECT ONES USE NOT &lang=en BUT ?lang=en
        }
        //go change the stuff to the language
        languageChanger("en");
    }else if(chosenLanguage === "Spanish" || chosenLanguage === "Испанский"){
        //set html lang to es
        document.documentElement.setAttribute("lang", "es");
        //change the link to the corresponding thank you page depending on the language if we're in about.html
        if(htmlFileName === "about"){
            const form = document.querySelector("form");
            const redirectInput = form.querySelector("input[name=redirect]");
            redirectInput.value = "https://htmlpreview.github.io/?https://raw.githubusercontent.com/TasiaTas/tasiatas.github.io/refs/heads/redesign/html_ENG/formSent.html&lang=es"
        }
        //go change the stuff to the language
        languageChanger("es");
    }else if(chosenLanguage === "Russian" || chosenLanguage === "Ruso"){
        //set html lang to ru
        document.documentElement.setAttribute("lang", "ru");
        //change the link to the corresponding thank you page depending on the language if we're in about.html
        if(htmlFileName === "about"){
            const form = document.querySelector("form");
            const redirectInput = form.querySelector("input[name=redirect]");
            redirectInput.value = "https://htmlpreview.github.io/?https://raw.githubusercontent.com/TasiaTas/tasiatas.github.io/refs/heads/redesign/html_ENG/formSent.html&lang=ru"
        }
        //go change the stuff to the language
        languageChanger("ru");
    }
}

//language changer
function languageChanger(language){
    //get the array in the language we need
    const languageBaseInjectionArray = translations[language]["base"];
    const languageInjectionArray = translations[language][htmlFileName];

    //change the elements to the corresponding language that are normal texts inside the html
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        //if what we want to change exists, change it. If not, show error
        if(languageBaseInjectionArray[key]){
            el.innerHTML = languageBaseInjectionArray[key];
        }else{
            console.log("You messed up between the keys in the html and the translations in the array: <--" + language + " " + htmlFileName + "-->");
        }
    });

    //change the elements that are different to the base (non navbar, etc)
    document.querySelectorAll("[data-i18n-dif]").forEach(el => {
        const key = el.getAttribute("data-i18n-dif");
        //if what we want to change exists, change it. If not, show error
        if(languageInjectionArray[key]){
            el.innerHTML = languageInjectionArray[key];
        }else{
            console.log("You messed up between the keys in the html and the translations in the array: <--" + language + " " + htmlFileName + "-->");
        }
    });

    //change the elements to the corresponding language that are through attributes/css injection
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
        const key = el.getAttribute("data-i18n-attr");
        //if what we want to change exists, change it. If not, show error
        if(languageInjectionArray[key]){
            el.setAttribute("data-note",languageInjectionArray[key]);
        }else{
            console.log("You messed up between the keys in the html and the translations in the array: <--" + language + " " + htmlFileName + "-->");
        }
    });
}