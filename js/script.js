//&--------------------------- Select html Elements ---------------------------//
//^ toggle A
const logSec = document.querySelector("#loginSection")
const regSec = document.querySelector("#registSection")
const signupA = document.querySelector(".signup-a")
const signinA = document.querySelector(".signin-a")
//^ SignUp
const userInput = document.querySelector("#user-input")
const userEmail = document.querySelector("#user-email")
const userPassword = document.querySelector("#user-password")
const signBtn = document.querySelector("#signUp")
//^ SignIn
const emailLogInput = document.querySelector("#emailLog-input")
const passwordLogin = document.querySelector("#password-log")
const loginnBtn = document.querySelector("#logIn")
//^ Invalid Email
const eError = document.querySelector(".e-Error")
const noAccount = document.querySelector(".no-account")

//&---------------------------our variables---------------------------//
let usersData = []

// console.log(emailLogInput,passwordLogin,loginnBtn);

//&--------------------------- function in js file ---------------------------//

//^ Set Data in Local Storage

function setData() {
    localStorage.setItem("Data",JSON.stringify(usersData))
}

//^ Get Data in Local Storage

function getData() {
    usersData = JSON.parse(localStorage.getItem("Data"))
} 
if(localStorage.getItem("Data")) {
    getData()
}

//^ Check Email regis

function checkEmail(x) {
    for (let i = 0; i < usersData.length; i++) {
        if(x.userEmail === usersData[i].userEmail) {
            eError.classList.remove("d-none")
            return false;
        }
    }
    return true
}

//^ Check Email & Password login
function loginCheck(x) {
for (let i = 0; i < usersData.length; i++) {
    if (x.email == usersData[i].userEmail && x.pass == usersData[i].userPass) {
        localStorage.setItem("currentUser",usersData[i].userName)
        return true;
    }
}
}
//^ Login Data 
function loginData() {
    person = {
        email: emailLogInput.value,
        pass:  passwordLogin.value
    }
    if (loginCheck(person)) {
        window.location.href = "home.html";
    } else {
        noAccount.classList.remove("d-none")
    }

} 

//^ Add Data To Array 

function registData() {
let person = {
    userName:userInput.value,
    userEmail:userEmail.value,
    userPass:userPassword.value
}
if (checkEmail(person) == true) {
    usersData.push(person);
    setData();
    regSec.classList.add("d-none")
    logSec.classList.remove("d-none") 
}

}


//&--------------------------- Events in js file ---------------------------//

//^ toggle between login and signup sections 

signupA.addEventListener("click",function() {
        logSec.classList.add("d-none")
        regSec.classList.remove("d-none") 
})
signinA.addEventListener("click",function() {
    regSec.classList.add("d-none")
    logSec.classList.remove("d-none") 
})

//^ SignUp Event

signBtn.addEventListener("click",function() {
registData()

})

//^ SignIn Event

loginnBtn.addEventListener("click",loginData)