let storeUser = localStorage.getItem("user");
let msg = document.getElementById("almsg");

let arr = JSON.parse(storeUser);

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;
    let isLogin = false;
    arr.forEach(element => {
        if(element.gmail === email && element.crPass == pass){
            isLogin = true;
        } 
    });
    if(isLogin){
        alert("Login Successfully");
        window.location.href = "./home.html";
    } else{ 
        msg.textContent="Incorrect email or password";
    }

});