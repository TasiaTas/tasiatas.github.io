/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const params = new URLSearchParams(window.location.search);
const changeToLang = params.get("lang") || "en"; //english is the default


//dictionary of arrays for translation choosing
const translations = {
    en:{
        base: engTranslationBase,
        form: engTranslationUpdatableFormSentHTML
    },
    es:{
        base: espTranslationBase,
        form: espTranslationUpdatableFormSentHTML
    },
    ru:{
        base: rusTranslationBase,
        form: rusTranslationUpdatableFormSentHTML
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//first, we change the html=lang of the document as it was sent here
document.documentElement.lang = changeToLang;

//go change to the correct language
languageChangerFormSent(changeToLang);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//language changer
function languageChangerFormSent(language){
    //change the elements to the corresponding language that are normal texts inside the html
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        //if what we want to change exists, change it. If not, show error
        if(translations[language]["base"][key]){
            el.innerHTML = translations[language]["base"][key];
        }else{
            console.log("You messed up between the keys in the html and the translations in the array: <--" + language + " " + htmlFileName + "-->");
        }
    });

    //change the elements that are different to the base (non navbar, etc)
    document.querySelectorAll("[data-i18n-dif]").forEach(el => {
        const key = el.getAttribute("data-i18n-dif");
        //if what we want to change exists, change it. If not, show error
        if(translations[language]["form"][key]){
            el.innerHTML = translations[language]["form"][key];
        }else{
            console.log("You messed up between the keys in the html and the translations in the array: <--" + language + " " + htmlFileName + "-->");
        }
    });
}