function openNav() {
    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menuJs";  
        console.log(x.className);
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    } else {
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }
}