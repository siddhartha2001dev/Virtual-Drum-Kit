alert("Hello! Welcome to Drum Kit!");

// Volume control
var volumeControl = document.getElementById("volume");
var volume = volumeControl.value;

volumeControl.addEventListener("input", function () {
  volume = this.value;
});

// Select all drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Click events (OLD FOR LOOP)
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var key = this.classList[1];   // w a s d j k l

    playSound(key);
    buttonAnimation(key);
    vibrate();

  });
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
  vibrate();
});

// Play sound function
function playSound(key) {
  var audio;

  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      return;
  }

  audio.volume = volume;
  audio.play();
}

// Button animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 150);
  }
}

// Mobile vibration
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(40);
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js")
      .then(function () {
        console.log("✅ Drum Pad PWA Ready");
      });
  });
}
