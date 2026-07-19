// Wedding Countdown

const weddingDate = new Date("December 4, 2026 19:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;


const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60)) /
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60)) /
1000
);


document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;


if(distance < 0){

clearInterval(timer);

document.getElementById("timer").innerHTML =
"Alhamdulillah, The Day Has Arrived ❤️";

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const music = document.getElementById("bgMusic");

openBtn.onclick = function(){

opening.classList.add("hide");

if(music){
music.play();
}

};


},1000);

