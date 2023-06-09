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

//other button functionality: speed adjusting (10%), skip (restart if exceeds length) and mute//

faster.addEventListener("click", function() {

	video.playbackRate = video.playbackRate / 0.9;
	console.log("Video speed is ", video.playbackRate);

});

slower.addEventListener("click", function() {

	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video speed is ", video.playbackRate);

});

skip.addEventListener("click", function() {

	video.currentTime = video.currentTime + 10;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;}
	console.log("The current video time is ", video.currentTime)

})

mute.addEventListener("click", function() {

	if(video.muted){
		video.muted = false;
		mute.innerHTML = "Mute";}
	else{
		video.muted = true;
		mute.innerHTML = "Unmute";}

});

//slider with volume update information//

slider.addEventListener("input", function() {

	video.volume = slider.value/100;
	volume.innerHTML = slider.value + '%';

});

//video filters//

vintage.addEventListener("click", function() {
	video.classList.add('oldSchool');
});

orig.addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });