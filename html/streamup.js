function streamup() {
    var http = new XMLHttpRequest();
    http.open('GET', "http://www.thick-air.com:8000/stream.mp3", false);
    http.send();
    if (http.status == 404) {
        console.log("removing");
        var stream = document.getElementById('audioControls');
        stream.style.display = "none";  
    } else {
        console.log("removing");
        var stream = document.getElementById('off-air');
        stream.style.display = "none";
    }
}