let currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
document.getElementById("currentDate").innerHTML = date + "/" + month + "/" + year;

function fetchIssues() {
    
}