/*
* This for cv theme, i don't want to break my style just because of code change!
* Please Do Not Remove This
* 7/22/2022
* CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/

var meaudio = document.getElementById('myAudio'); 
var mp1 = document.getElementById('musicpl'); 
var mp2 = document.getElementById('musicpa'); 
var mp1a = document.getElementById('musicp2'); 
var mp2a = document.getElementById('musicpa2');
var loader = document.getElementById("preloader");

window.onload = function() {
    setTimeout(function() {
      loader.style.opacity = "0";
      setTimeout(function() {
        loader.style.display = "none";
      }, 500);
    },1500);
}

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
