var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");

function start() {
    document.getElementById("voice-input").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    
    document.getElementById("voice-input").innerHTML = Content;

    if(Content == "take my selfie") {
        speak();
        Webcam.attach(camera);
    }
}

function speak() {
    var Synth = window.speechSynthesis;

    var speakData = "Taking your selfie in 5 seconds";

    var speakThis = new SpeechSynthesisUtterance(speakData);
    Synth.speak(speakThis);
}