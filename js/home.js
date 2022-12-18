
let header=document.querySelector("h1");
let owners=document.querySelectorAll(".postOwnerName");
let getNewUserName = sessionStorage.getItem('newUserName');
header.appendChild(document.createTextNode (" "+getNewUserName));
for (const owner of owners) {
owner.appendChild(document.createTextNode (" "+getNewUserName));
}