let form = document.getElementById("form");
let names = document.getElementById("name");
let subject = document.getElementById("subject");
let gender = document.getElementById("gender");
let mail = document.getElementById("email");
let number = document.getElementById("number");
let alertmsg = document.getElementById("addMsg");
let num = document.getElementById("num");
let logout = document.getElementById("logoutBtn");
let userName = document.getElementById("userName");
let currentUser = localStorage.getItem("currentUser");
if(currentUser){
    userName.textContent=currentUser;
}
// ==== Table ====
let tableBody = document.getElementById("tb-body");

let data = [];
let store = localStorage.getItem("teacher");
let count;
let numOfTeacher = localStorage.getItem("numTeacher");
 
if(store){
    data = JSON.parse(store);
    count = JSON.parse(numOfTeacher);
    addTeacher();
} 

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let teachers = {
        tName: names.value,
        sub: subject.value,
        gen: gender.value,
        gmail: mail.value,
        phone: number.value,
    }
    if (teachers.phone.length !== 10) {
        alertmsg.textContent = "Error:- Mobile number must be 10 digits";
        return;
    } else {
        alertmsg.textContent = "";
    }
    data.push(teachers);
    count = data.length; 
    addTeacher();
    alert("Teacher added Successfully");
    localStorage.setItem("teacher",JSON.stringify(data))
    localStorage.setItem("numTeacher",JSON.stringify(count));
    form.reset();
})
function addTeacher() {
    tableBody.innerHTML = "";
    data.forEach((dat, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${dat.tName}</td>
            <td>${dat.sub}</td>
            <td>${dat.gen}</td>
            <td>${dat.gmail}</td>
            <td>${dat.phone}</td>
            <td>
              <button class="delbtn" onclick="delet(${index})">Delete</button>
            </td>

        `;
        tableBody.appendChild(row);
    })
}
function delet(index){
    data.splice(index,1);
    count--;
    confirm("Are you sure to delete ?");
    localStorage.setItem("teacher",JSON.stringify(data))
    localStorage.setItem("numTeacher",JSON.stringify(count));
    addTeacher();
}

// ==== Logout ====
     const toggler = document.getElementById('hamburgar');
    const collapse = document.getElementById('navbarTogglerDemo02');

    toggler.addEventListener('click', () => {
        collapse.classList.toggle('show');
    });