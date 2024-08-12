var img = document.getElementById("img");
var isOn = false;

function bulbOff() {
    console.log("Turning bulb off");
    img.src = "image/on.png";
    img.className = "styling";
    var onButton = document.querySelector('.on');
    var offButton = document.querySelector('.off');
    if (onButton && offButton) {
        onButton.disabled = true;
        offButton.disabled = false;
    }
    document.getElementById("body").className = "bg-change";
    isOn = false;
}

function bulbOn() {
    console.log("Turning bulb on");
    img.src = "image/off.png";
    // img.className = "styling";
    var onButton = document.querySelector('.on');
    var offButton = document.querySelector('.off');
    if (onButton && offButton) {
        onButton.disabled = false;
        offButton.disabled = true;
    }
    document.getElementById("body").className = "bg-black";
    isOn = true;
}

img.onclick = function() {
    console.log("Image clicked. Current state:", isOn ? "On" : "Off");
    if (isOn) {
        bulbOff();
    } else {
        bulbOn();
    }
};


