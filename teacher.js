let form = document.getElementById("form");
let names = document.getElementById("name");
let subject = document.getElementById("subject");
let gender = document.getElementById("gender");
let mail = document.getElementById("email");
let number = document.getElementById("number");
let alertmsg = document.getElementById("addMsg");

let data=[];

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let teachers ={
        stName : names.value,
        sub : subject.value,
        gen : gender.value,
        gmail : mail.value,
        phone : number.value,
    }
     if (teachers.phone.length !== 10) {
      alertmsg.textContent = "Error:- Mobile number must be 10 digits";
      return;
    } else {
      alertmsg.textContent = "";
    }
    data.push(teachers);
    alert("Teacher added Successfully");
    form.reset();
})
function addTeacher(){

}