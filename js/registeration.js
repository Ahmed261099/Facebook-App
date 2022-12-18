// signUp page

let registerName = document.getElementById("userName");
let registerMail = document.getElementById("userEmail");
let registerPass = document.getElementById("userPassword");
let inValidateName = document.getElementById("inValidateName");
let inValidateEmail = document.getElementById("inValidateEmail");
let successLabel = document.getElementById("successLabel");
let emailExistsLabel = document.getElementById("emailExistsLabel");
let requiredLabel = document.getElementById("requiredLabel");
let signUpBtn = document.getElementById("signUpBtn");
let checkValidateName = false, checkValidateEmail = false;;
let UsersContainer;

if(localStorage.getItem("USER")== null)
{
    UsersContainer = [];
}
else
{
    UsersContainer = JSON.parse(localStorage.getItem("USER"));
}

signUpBtn.addEventListener("click", addUser);
registerName.addEventListener("blur" , function(){
    if(validateName(this.value))
    {
        checkValidateName = true;
        inValidateName.classList.replace("d-block", "d-none");
    }
    else
    {
        checkValidateName = false;
        inValidateName.classList.replace("d-none" , "d-block");
    }
})
registerMail.addEventListener("blur", function(){
    if(validateEmail(this.value))
    {
        checkValidateEmail = true ; 
        inValidateEmail.classList.replace("d-block", "d-none");
    }
    else
    {
        checkValidateEmail = false;
        inValidateEmail.classList.replace("d-none", "d-block")
    }
})

function validateName(uName)
{
    let regex = /^[A-Z]([a-z]|[A-Z]|\s){2,20}$/
    return regex.test(uName)
}
function validateEmail(uEmail)
{
    let regex = /^([a-z]|[A-Z]){3,10}([1-9]?|[1-9][0-9]{0,3})@[a-z]{4,10}.com$/;
    return regex.test(uEmail)
}

function checkSignupFilling()
{
    if(registerName.value.trim() == "" || registerMail.value.trim() == "" || registerPass.value.trim() == "")
    {
        requiredLabel.classList.replace("d-none" , "d-block");
        return false;
    }
    else if(checkValidateName == false || checkValidateEmail == false)
    {
        return false
    }
    else
    {
        requiredLabel.classList.replace("d-block", "d-none");
        return true;
    }
}

function checkRepeating()
{
    let check = false ;
    for (let i=0 ; i<UsersContainer.length; i++)
    {
        if (registerMail.value == UsersContainer[i].userEmail)
        {
            check = true;
            break;
        }    
    }
    if (check) 
    {
        emailExistsLabel.classList.replace("d-none", "d-block");
        return false;
    }
    else 
    {
        emailExistsLabel.classList.replace("d-block", "d-none");
        return true;
    }
}
function addUser()
{
    if(checkSignupFilling())
    {
        if(checkRepeating())
        {
            let user = {
                userName: registerName.value,
                userEmail: registerMail.value,
                userPass: registerPass.value
            }
            UsersContainer.push(user);
            localStorage.setItem("USER", JSON.stringify(UsersContainer));
            clearForm();
            emailExistsLabel.classList.replace("d-block", "d-none");
            successLabel.classList.replace("d-none", "d-block");
        }
    }
}

function clearForm()
{
    registerName.value="";
    registerMail.value="";
    registerPass.value="";
}