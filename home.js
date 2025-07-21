let teacher = document.getElementById("teacher");
let student = document.getElementById("student");
let notes = document.getElementById("notes");
let logout = document.getElementById("logoutBtn");
let userName = document.getElementById("userName");
let currentUser = localStorage.getItem("currentUser");
if(currentUser){
    userName.textContent=currentUser;
}


let numOfTeacher = localStorage.getItem("numTeacher");
teacher.textContent=numOfTeacher;

let numStudent = localStorage.getItem("numStudent");
student.textContent=numStudent;

let notesCount = localStorage.getItem("filecount");
notes.textContent=notesCount;

// ==== Logout ====
 
    const toggler = document.getElementById('hamburgar');
    const collapse = document.getElementById('navbarTogglerDemo02');

    toggler.addEventListener('click', () => {
        collapse.classList.toggle('show');
    });