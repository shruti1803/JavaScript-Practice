const taskinput = document.getElementById("taskinput");
const addtaskbtn = document.getElementById("addtaskbtn");
const tasklist = document.getElementById("tasklist");
 
addtaskbtn.addEventListener("click", function () {
    const task = taskinput.value;
    const li = document.createElement("li");
    li.textContent = task;

    //delete button creation
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    //delete button event listener
    deletebtn.addEventListener("click", function() {
        tasklist.removeChild(li);
    });

    li.appendChild(deletebtn);
    tasklist.appendChild(li);
});

    
