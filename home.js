let teacher = document.getElementById("teacher");
let student = document.getElementById("student");
let notes = document.getElementById("notes");
let logout = document.getElementById("logoutBtn");

let numOfTeacher = localStorage.getItem("numTeacher");
teacher.textContent=numOfTeacher;

let numStudent = localStorage.getItem("numStudent");
student.textContent=numStudent;

let notesCount = localStorage.getItem("filecount");
notes.textContent=notesCount;

// ==== Logout ====
logout.addEventListener("click",()=>{
  confirm("Are you sure to want to logout ? ");  
})