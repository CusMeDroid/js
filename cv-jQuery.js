var lh = "";
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > lh.value || document.documentElement.scrollTop > lh.value) {
    document.getElementsByClassName("bar1").style.background = "#222 !important";
    document.getElementsByClassName("bar1").style.background = "#222 !important";
    document.getElementsByClassName("bar1").style.background = "#222 !important";
  } else {
    document.getElementsByClassName("bar1").style.backgroundColor = "#FFF !important";
    document.getElementsByClassName("bar1").style.backgroundColor = "#FFF !important";
    document.getElementsByClassName("bar1").style.backgroundColor = "#FFF !important";
  }
}

function myResponsive(mmnm) {
  if (mmnm.matches) {
    lh = "300";
  } else {
    lh = "600";
  }
}

var mmnm = window.matchMedia("(max-width: 700px)");
myResponsive(mmnm);
mmnm.addListener(myResponsive);

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