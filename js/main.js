
 
// ***************************************************
// signin/login page

let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let incorrectLabel = document.getElementById("incorrectLabel");
let loginRequiredLabel = document.getElementById("loginRequiredLabel");
let loginBtn = document.getElementById("loginBtn")

let UsersContainer;

if(localStorage.getItem("USER")== null)
{
    UsersContainer = [];
}
else
{
    UsersContainer = JSON.parse(localStorage.getItem("USER"));
}

loginBtn.addEventListener("click" , logIn)

function checkLoginFilling()
{
    if(loginEmail.value.trim() == "" || loginPassword.value.trim() =="")
    {
        loginRequiredLabel.classList.replace("d-none" , "d-block")
        return false;
    }
    else
    {
        loginRequiredLabel.classList.replace("d-block" , "d-none");
        return true;
    }
}

function logIn()
{
    let logincheck = false;
    let uname = "";
    if(checkLoginFilling())
    {
        for(let i =0 ; i < UsersContainer.length ; i++)
        {
            if(UsersContainer[i].userEmail == loginEmail.value && UsersContainer[i].userPass == loginPassword.value)
            {
                logincheck = true;
                uname = UsersContainer[i].userName;
                break;
            }
        }
        if(logincheck)
        {
            sessionStorage.setItem("newUserName" , uname);
            window.open("home.html", "_self");
        }
        else
        {
            incorrectLabel.classList.replace("d-none" , "d-block")
        }
    }
}

// ***************************************************
// Home page
