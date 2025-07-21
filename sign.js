
let signupForm = document.getElementById("signupForm");
let pName = document.getElementById("name");
let email = document.getElementById("email");
let mob = document.getElementById("number");
let pass = document.getElementById("password");
let confirmPass = document.getElementById("conf-password");
let checkbox = document.getElementById("checkbox");
let msg = document.getElementById("almsg");


let persons = [];
// ==== local get ===
let storeUser = localStorage.getItem("user");
if(storeUser){
    persons =JSON.parse(storeUser);
}
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let person = {
        perName : pName.value,
        gmail : email.value,
        phone : mob.value,
        crPass : pass.value,
        cnfrmPass : confirmPass.value,
        chbox : checkbox.checked,
    }
    if (person.crPass !== person.cnfrmPass) {
        msg.textContent="Passwords do not match!";
        return;
    }

    if (!person.chbox) {
        msg.innerText="";
        msg.innerText="You must accept terms & conditions";
        return;
    }
    if(person.phone.length != 10){
        msg.innerText="";
        msg.innerText="Invalid Phone Number";
        return;
    } 
   for (let element of persons) {
    if (element.gmail === person.gmail) {
        alert("Already Exists");
        return; // This stops function execution
    }
}
    persons.push(person);

    // Save to localStorage (optional)
    localStorage.setItem("user",JSON.stringify(persons));
    localStorage.setItem("currentUser",JSON.stringify(person.perName));
    
    signupForm.reset();
    // Redirect
    window.location.href = "./home.html";
});