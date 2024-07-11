// function showpopup() {
//     var menubar = document.getElementById("menuBar");
//     if (menubar.style.display === "block") {
//         menubar.style.display = "none";
//     } else {
//         menubar.style.display = "block";
//     }
// }
// document.addEventListener("click", function (event) {
//     var menubar = document.getElementById("menuBar");
//     var menu = document.querySelector(".menu-bar");
//     if (event.target !== menubar && event.target !== menu) {
//         menubar.style.display = "none";
//     }
// });

var da = document.getElementById("menu-bar");
document.addEventListener("mousedown", function(event){
    var e= document.getElementById("menuBar");
    if (da.contains(event.target)) {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
});

var bt = document.getElementsByClassName("btn");
    var sec = document.getElementsByClassName("photo");

    for (let i = 0; i < bt.length; i++) {
      bt[i].addEventListener("click", function (event) {
        for (let j = 0; j < bt.length; j++) {
          if (event.target.textContent === bt[j].textContent) {
            for (let k = 0; k < sec.length; k++) sec[k].classList.add("hidden");
            sec[j].classList.remove("hidden");
          }
        }
      });
    }
