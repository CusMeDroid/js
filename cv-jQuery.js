/*
* This for cv theme, i don't want to break my style just because of code change!
* Please Do Not Remove This
* 7/22/2022
* CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/

window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    document.getElementById("bar1").style.backgroundColor = "black";
    document.getElementById("bar2").style.backgroundColor = "black";
    document.getElementById("bar3").style.backgroundColor = "black";
  } else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("bar1").style.backgroundColor = "#EFEFEF";
    document.getElementById("bar2").style.backgroundColor = "#EFEFEF";
    document.getElementById("bar3").style.backgroundColor = "#EFEFEF";
  }
}

var meaudio = document.getElementById('myAudio'); 
var mp1 = document.getElementById('musicpl'); 
var mp2 = document.getElementById('musicpa'); 
var mp1a = document.getElementById('musicp2'); 
var mp2a = document.getElementById('musicpa2');

function playAudio() { 
  meaudio.play(); 
  mp1.style.display = 'none';
  mp2.style.display = 'block';
  mp1a.style.display = 'none';
  mp2a.style.display = 'block';
} 

function pauseAudio() { 
  meaudio.pause(); 
  mp1.style.display = 'block';
  mp2.style.display = 'none';
  mp1a.style.display = 'block';
  mp2a.style.display = 'none';
}

var timer = setTimeout(function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById('myAudio').autoplay;
    document.getElementById("musicpl").style.display = "none";
    document.getElementById("musicpa").style.display = "block";
    document.getElementById("musicp2").style.display = "none";
    document.getElementById("musicpa2").style.display = "block";
}, 1500);
$(document).ready(function(){
    $(".preloader").setTimeout();
});

/* onclick */
function mAbout() {
    window.location.href = '#about';
}

function mStudy() {
    window.location.href = '#study';
}

function mContact() {
    window.location.href = '#contact';
}

function myFunction(memenu) {
  memenu.classList.toggle("change");
}
$(document).ready(function(){
  $("#smenu").click(function(){
    $("#cmenu").slideToggle('fast');
  });
});
