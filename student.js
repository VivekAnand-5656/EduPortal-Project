let form = document.getElementById("form");
let names = document.getElementById("name");
let rollNum = document.getElementById("roll");
let clas = document.getElementById("clas");
let gender = document.getElementById("gender");
let number = document.getElementById("number");
let mail = document.getElementById("email");
let alertmsg = document.getElementById("addMsg");
let logout = document.getElementById("logoutBtn");
// ==== Table ====
let tableBody = document.getElementById("tb-body");

let data = [];
let store = localStorage.getItem("student") || [];
let count;
let numStudent = localStorage.getItem("numStudent");
if (store) {
    data = JSON.parse(store);
    count = JSON.parse(numStudent)
    addStudent();
}

form.addEventListener("submit", (eve) => {
    eve.preventDefault();

    let students = {
        stName: names.value,
        roll: rollNum.value,
        cls: clas.value,
        gen: gender.value,
        phone: number.value,
        gmail: mail.value,
    }
    if (students.phone.length !== 10) {
        alertmsg.textContent = "Error:- Mobile number must be 10 digits";
        return;
    } else {
        alertmsg.textContent = "";
    }
    data.push(students);
    count= data.length;
    addStudent();
    alert("Student's Added Successfully");
    localStorage.setItem("student", JSON.stringify(data));
    localStorage.setItem("numStudent", JSON.stringify(count));
    form.reset();

})
function addStudent() {
    tableBody.innerHTML = "";
    data.forEach((stData, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${stData.stName}</td>
            <td>${stData.roll}</td>
            <td>${stData.cls}</td>
            <td>${stData.gen}</td>
            <td>${stData.phone}</td>
            <td>${stData.gmail}</td>
            <td>
            <button class="tb-btn" id="edit" >Edit</button>
            <button onclick="delet(${index})" class="tb-btn" id="delete" >Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    })
}
function delet(index){
    data.splice(index,1);
    count--;
    localStorage.setItem("student", JSON.stringify(data));
    localStorage.setItem("numStudent", JSON.stringify(count));

    addStudent();

}
// ==== Logout ====
logout.addEventListener("click",()=>{
  confirm("Are you sure to want to logout ? ");  
})