let tableBody = document.getElementById("todoTableBody");
let prioritySelect = document.getElementById("prioritySelect");
let statusSelect = document.getElementById("statusSelect");

let archive = JSON.parse(localStorage.getItem("archive")) || [];
loadData(archive);
function loadData(archive){
tableBody.innerHTML="";
archive.forEach((archive,i)=>{
    let tblrow= document.createElement("tr");
    let tbldata1=document.createElement("td");
    let tbldata2=document.createElement("td");
    let tbldata3=document.createElement("td");
    let tbldata4=document.createElement("td");
    let tbldata5=document.createElement("td");

    tbldata1.innerHTML=archive.title;
    tbldata2.innerHTML=archive.priority;
    tbldata3.innerHTML=archive.status;

    if (archive.priority == "medium") {
        tbldata2.style.backgroundColor = "rgb(255,255,0)"
    } else if (archive.priority == "high") {
        tbldata2.style.backgroundColor = "rgb(255,0,0)"
    }
    let restorebutton=document.createElement("button");
    restorebutton.className="restoreBtn";
    restorebutton.innerHTML="Restore";

    restorebutton.addEventListener("click",()=>{
        let archive = JSON.parse(localStorage.getItem("archive")) || [];
        let todos = JSON.parse(localStorage.getItem("todos")) || [];

        let restoredData = archive.filter((element , index)=> i != index);
        todos.push(archive[i]);
        localStorage.setItem("archive",JSON.stringify(restoredData));
        localStorage.setItem("todos",JSON.stringify(todos));
        loadData(restoredData);
    });

    let deletebutton = document.createElement("button");
    deletebutton.className="deleteBtn";
    deletebutton.innerHTML=" Delete";
    deletebutton.style.backgroundColor="red";
    deletebutton.style.color="white";

    deletebutton.addEventListener("click",()=>{
        let archive = JSON.parse(localStorage.getItem("archive"));
        let deletedData = archive.filter((element , index)=> i != index);
        localStorage.setItem("archive",JSON.stringify(deletedData));
        loadData(deletedData);

    })

    tbldata5.append(deletebutton);
    tbldata4.append(restorebutton);
    tblrow.append(tbldata1,tbldata2,tbldata3,tbldata4,tbldata5);
    tableBody.append(tblrow);
});
}

function filterData() {
    let archive = JSON.parse(localStorage.getItem("archive"));
    let restoredData = archive.filter(el => {
        return (prioritySelect.value === "" || el.priority == prioritySelect.value) &&
               (statusSelect.value === "" || el.status == statusSelect.value);
    });

    loadData(restoredData);
}

prioritySelect.addEventListener("change", filterData);
statusSelect.addEventListener("change", filterData);