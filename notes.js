
let form = document.getElementById("form");
let noteName = document.getElementById("note");
let subject = document.getElementById("subject");
let fileUpload = document.getElementById("fileUpload");
let cards = document.getElementById("cards");
let logout = document.getElementById("logoutBtn");

let noteData = [];

let storefile = localStorage.getItem("fileset");
let count;
let filec = localStorage.getItem("filecount");
if(storefile){
    noteData = JSON.parse(storefile);
    count = JSON.parse(filec);
    addNotes();
}

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
      let file = fileUpload.files[0];
    if (!file) {
        alert("Please upload a file!");
        return;
    }
        let fileURL = URL.createObjectURL(file);  // temporary URL for browser access

    let notes = {
        notname : noteName.value,
        sub : subject.value,
        brow : fileURL,
    }
    noteData.push(notes);
    count= noteData.length;
    addNotes();
    localStorage.setItem("fileset",JSON.stringify(noteData));
    localStorage.setItem("filecount",JSON.stringify(count));
    alert("Notes Added Successfully");
    form.reset();
})
function addNotes(){
    cards.innerHTML="";
    noteData.forEach((element, index) => {
        let box = document.createElement("div");
        box.className="box";
        box.innerHTML=` 
            <img src="./images/pdf_9496432.png" alt="Pdf">
            <h2>${element.notname}</h2>
            <p>${element.sub}</p>
            <div class="pdf-btns">
                <a href="${element.brow}" target="_blank"><i class="fa-solid fa-eye"></i></a>
                <a href="${element.brow}" download><i class="fa-solid fa-file-arrow-down"></i></a>
            </div>
           <button onclick="deleteNote(${index})"><i class="fa-solid fa-trash"></i></button>
        
        `;
        cards.appendChild(box);
    });
}
function deleteNote(index) {
    noteData.splice(index, 1);
    count--;
    localStorage.setItem("fileset",JSON.stringify(noteData));
    localStorage.setItem("filecount",JSON.stringify(count));
    addNotes();
}

// ==== Logout ====
logout.addEventListener("click",()=>{
  confirm("Are you sure to want to logout ? ");  
})