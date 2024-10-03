let addTodoButton = document.getElementById("addBtn");
let tableBody = document.getElementById("todoTableBody");
let inputTitle = document.getElementById("todoName");
let prioritySelect = document.getElementById("priority");

addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = {
        title: inputTitle.value,
        priority: prioritySelect.value,
        status: "Pending🔃"
    }

    if (todo.title == "") {
        alert("Todo cannot be empty!");
    }
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    appendData(todos);
})

function appendData(arr) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    tableBody.innerHTML = "";
    todos.forEach((todo, i) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.innerHTML = todo.title;
        td2.innerHTML = todo.priority;

        if (todo.priority == "medium") {
            td2.style.backgroundColor = "rgb(255,255,0)"
        } else if (todo.priority == "high") {
            td2.style.backgroundColor = "rgb(255,0,0)"
        }

        let togglebtn = document.createElement("button");
        togglebtn.className = "toggle";
        togglebtn.innerHTML = todo.status;

        togglebtn.addEventListener("click", () => {
            if (todo.status == "Pending🔃") {
                todos[i].status = "Completed✅"
            } else {
                todos[i].status = "Pending🔃"
            }
            localStorage.setItem("todos", JSON.stringify(todos));
            appendData(todos);
        });

        let removebtn = document.createElement("button");
        removebtn.className = "archiveBtn";
        removebtn.innerHTML = "archive";
        removebtn.style.backgroundColor="red";
        removebtn.style.color="white";
        removebtn.style.borderColor="red"
        removebtn.style.borderRadius="10px"
        removebtn.addEventListener("click", () => {
            let archive = JSON.parse(localStorage.getItem("archive")) || [];
            let todos = JSON.parse(localStorage.getItem("todos")) || [];
            archive.push(todos[i]);
            todos.splice(i, 1);  
           localStorage.setItem("archive", JSON.stringify(archive));
           localStorage.setItem("todos", JSON.stringify(todos));
           appendData(todos);
        });

        td4.append(removebtn);
        td3.append(togglebtn);
        tr.append(td1, td2, td3, td4);
        tableBody.append(tr);
    });
}