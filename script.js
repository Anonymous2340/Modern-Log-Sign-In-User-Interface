"use strict";

const signUp = document.getElementById("sign-up-btn");
const logIn = document.getElementById("log-in-btn");
const theme = document.querySelector(".container");
const pwdSignUp = document.getElementById("show-pwd-sign-up");
const pwdLogIn = document.getElementById("show-pwd-log-in");
const pwdEye1 = pwdSignUp.querySelector("#show-pwd-sign-up > .fa-eye");
const pwdEye2 = pwdLogIn.querySelector("#show-pwd-log-in > .fa-eye");
const signUpSecpwd = document.getElementById("pwd-sign-up");
const logInSecpwd = document.getElementById("pwd-log-in");

signUp.addEventListener("click", ()=>{
    theme.classList.toggle("active");
});

logIn.addEventListener("click", ()=>{
    theme.classList.toggle("active");
});

pwdSignUp.addEventListener("click", ()=>{
    if (pwdEye1.classList.contains("fa-eye-slash")) {
        pwdEye1.classList.add("fa-eye");
        pwdEye1.classList.remove("fa-eye-slash");
    } else {
        pwdEye1.classList.remove("fa-eye");
        pwdEye1.classList.add("fa-eye-slash");
    }

    if (signUpSecpwd.type.toLowerCase() === "password") {
        signUpSecpwd.type = "text";
    } else {
        signUpSecpwd.type = "password";
    }
    
});

pwdLogIn.addEventListener("click", ()=>{
    if (pwdEye2.classList.contains("fa-eye-slash")) {
        pwdEye2.classList.add("fa-eye");
        pwdEye2.classList.remove("fa-eye-slash");
    } else {
        pwdEye2.classList.remove("fa-eye");
        pwdEye2.classList.add("fa-eye-slash");
    }

    if (logInSecpwd.type.toLowerCase() === "password") {
        logInSecpwd.type = "text";
    } else {
        logInSecpwd.type = "password";
    }});