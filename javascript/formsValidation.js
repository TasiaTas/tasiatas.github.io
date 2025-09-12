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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
form.addEventListener("submit", (e) =>{
    //check for empty required spaces
    if(!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value){
        e.preventDefault(); //stop submission
        errorMessage.style.display = "flex";
        if(!nameInput.value){
            nameInput.placeholder = "Please fill in your name";
        }
        if(!emailInput.value){
            emailInput.placeholder = "Please fill in your email";
        }
        if(!subjectInput.value){
            subjectInput.placeholder = "Please fill in your subject";
        }
        if(!messageInput.value){
            messageInput.placeholder = "Please fill in your message";
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