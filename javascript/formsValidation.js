/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");
const emailError = document.getElementById("emailErrorUnique");
const pageLang = document.documentElement.getAttribute("lang");

//messages language array
const eng = [
    "Please fill in your name",
    "Please fill in your email",
    "Please fill in your subject",
    "Please fill in your message"
];

const esp = [
    "Por favor, rellene su nombre",
    "Por favor, rellene su correo",
    "Por favor, rellene su asunto",
    "Por favor, rellene su mensaje"
];

const rus = [
    "Пожалуйста, укажите ваше имя",
    "Пожалуйста, введите свой адрес электронной почты",
    "Пожалуйста, укажите тему",
    "Пожалуйста, заполните ваше сообщение"
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
form.addEventListener("submit", (e) =>{
    //check for empty required spaces
    if(!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value){
        e.preventDefault(); //stop submission
        errorMessage.style.display = "flex";
        if(pageLang === "en"){
            languageDisplayMessage(eng);
        }else if(pageLang === "es"){
            languageDisplayMessage(esp);
        }else{
            languageDisplayMessage(rus);
        }
    }else{
        errorMessage.style.display = "none";
        form.reset();
    }
})

//if go outside email box and @ missing, inform user
emailInput.addEventListener("blur", () => {
    //check if @ is missing message
    if(!emailInput.validity.valid){
        emailError.style.display = "block";
    }else{
        emailError.style.display = "none";
    }
});

//if written the @ already, then hide message
emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
        emailError.style.display = "none";
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//message function depending on array passed
function languageDisplayMessage(array){
    if(!nameInput.value){
        nameInput.placeholder = array[0];
    }
    if(!emailInput.value){
        emailInput.placeholder = array[1];
    }
    if(!subjectInput.value){
        subjectInput.placeholder = array[2];
    }
    if(!messageInput.value){
        messageInput.placeholder = array[3];
    }
}