// here document refers to the html doc, tskinput is the variable which contains the element taskinput from html
// get element by id is used to access the element with the specified id in the html - here its taskinput
const tskinput = document.getElementById("taskinput");

const addtaskbtn = document.getElementById("addtaskbtn");
const tasklist = document.getElementById("tasklist");
 
// when button is clicked, function will be executed
addtaskbtn.addEventListener("click", function () {

// task variable stores the value of tskinput 
    const task = tskinput.value;

// li element is created to make a list of tasks
    const li = document.createElement("li");

// text content of li is set to the value of task
    li.textContent = task;

// delete button is created 
    const deletebtn = document.createElement("button");

// will display the text delete on the button
    deletebtn.textContent = "Delete";

// when delete button is clicked, the task will be removed from the list
    deletebtn.addEventListener("click", function() {
        tasklist.removeChild(li);
    });

// delete button is added to the list
    li.appendChild(deletebtn);

// list item is added to the tasklist
    tasklist.appendChild(li);
});

    
