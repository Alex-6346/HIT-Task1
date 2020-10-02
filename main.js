$(document).ready(function() {

                   


document.getElementById("email").addEventListener("change", emailValidate);
document.getElementById("password").addEventListener("change", passwordValidate);
document.getElementById("repeatPassword").addEventListener("change", repeatPasswordValidate);
document.getElementById("hugeButton").addEventListener("click", loggingValidate);


var ema=false;
var pas=false;
var repPas=false;

function emailValidate(){
 
 let emailStr = 
                document.getElementById("email").value; 
            if (emailStr.match(/\w+@\w+\.com/g)){
                alert('Correct e-mail!'); 
                ema=true;
            }
            else{
                alert('Error! Email should contain symbol "@",symbols before and after it,and ".com" in the end (Example: example@gmail.com).');
                ema=false;
            }
}


function passwordValidate(){
 
 let passwordStr = 
                document.getElementById("password").value; 
            if (passwordStr.match(/[A-Z]/g)&&
                passwordStr.match(/[0-9]/g)&&
                passwordStr.length >= 8){
                alert('Correct password!');
                pas=true;
            }
            else{
                alert('Error! Password should contain at least 8 symbols, 1 uppercase letter and 1 digit (Example: Example1).');
                pas=false;
            }
}


function repeatPasswordValidate(){
 let repeatPasswordStr = 
                document.getElementById("repeatPassword").value; 
let passwordStr = 
                document.getElementById("password").value; 
            if (repeatPasswordStr===passwordStr){
                repPas=true;
            }
            else{
                alert('Error! The entered value does not match with the value of password.');
                repPas=false;
            }
}




function loggingValidate(){
    if(ema===true&&pas===true&&repPas===true){
        alert('Congratulations, you are logged in!');
    }
    else if(ema===false){
        alert('Incorrect data(e-mail)');
    }
    else if(pas===false){
        alert('Incorrect data(password)');
    }
    else if(repPas===false){
        alert('Incorrect data(repeat password)');
    }

}






 });


