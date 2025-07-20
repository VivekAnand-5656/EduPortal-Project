let store = localStorage.getItem("student");
let studentData = store ? JSON.parse(store) : [];
// ------------------------
let table = document.getElementById("tb-body");
let form = document.getElementById("form");
let date = document.getElementById("date");

let logout = document.getElementById("logoutBtn");


function addTable() {
    table.innerHTML = "";
    studentData.forEach((element, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${element.roll}</td>
            <td>${element.stName}</td>
            <td><input type="radio" name="attendance${index}" value="present"></td>
            <td><input type="radio" name="attendance${index}" value="absent"></td>
            <td><input type="radio" name="attendance${index}" value="leave"></td>
                    
        `;
        table.appendChild(row);
    });
}
addTable();

// === Table ===
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let selectDate = date.value;
    if(!selectDate){
        alert("Please Select date");
        return;
    }
    let storeTable = [];


    studentData.forEach((student, index) => {
        let selected = document.querySelector(`input[name="attendance${index}"]:checked`);
        // attendeceData[student.roll] = selected.value;
        let attendeceData = {
            dates : date.textContent=date.value,
            roll : student.roll,
            names : student.stName,
            abStatus : selected ? selected.value : "not marked"
        };
        storeTable.push(attendeceData);

    })
    let fullAttendance = JSON.parse(localStorage.getItem("setAttendence")) || {};
    fullAttendance[selectDate] = storeTable;

 

    localStorage.setItem("setAttendence", JSON.stringify(fullAttendance));
    alert("Submit Successfully");
    form.reset();
})
// ==== Logout ====
logout.addEventListener("click", () => {
    confirm("Are you sure to want to logout ? ");
});
