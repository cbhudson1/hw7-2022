//declaring variables before using them; spacing to read more clearly//

var video;

var play = document.querySelector("#play");
var pause = document.querySelector("#pause");

var faster = document.querySelector("#faster");
var slower = document.querySelector("#slower");

var slider = document.querySelector("#slider");
var volume = document.querySelector("#volume");

var mute = document.querySelector("#mute");
var skip = document.querySelector("#skip");

var orig = document.querySelector("#orig");
var vintage = document.querySelector("#vintage");

//initialize declared vars//

window.addEventListener("load", function() {
	
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	
	video.autoplay = false;
	console.log("Video autoplay is set to " + video.autoplay);

	video.loop = false;
	console.log("Video loop is set to " + video.loop);

});

//play and pause button functionality//

play.addEventListener("click", function(){
	
	video.play();
	slider.value = video.volume * 100;
	volume.innerHTML = video.volume * 100 + '%';

});

pause.addEventListener("click", function(){
	video.pause();
});

//other button functionality: speed adjusting, skip and mute//





// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

