/*
* This for cv theme, i don't want to break my style just because of code change!
* Please Do Not Remove This
* 7/22/2022
* CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/

/* Embed play/pause */
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('music-video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById("musicpl");
    var pauseButton = document.getElementById("musicpa");
    var playButton2 = document.getElementById("musicp2");
    var pauseButton2 = document.getElementById("musicpa2");
    playButton.addEventListener("click", function() {
        player.playVideo();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        playButton2.style.display = "none";
        pauseButton2.style.display = "block";
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    });
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
        playButton2.style.display = "block";
        pauseButton2.style.display = "none";
    });
    playButton2.addEventListener("click", function() {
        player.playVideo();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        playButton2.style.display = "none";
        pauseButton2.style.display = "block";
    });
    pauseButton2.addEventListener("click", function() {
        player.pauseVideo();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
        playButton2.style.display = "block";
        pauseButton2.style.display = "none";
    });
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
/* End embed play/pause */

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

/* Me Menu Main */
function myFunction(memenu) {
  memenu.classList.toggle("change");
}
$(document).ready(function(){
  $("#smenu").click(function(){
    $("#cmenu").slideToggle('fast');
  });
});

/* Navbar bottom new */
var menu_bar = document.querySelector('.me-bottom-bar');
var menu_item = document.querySelectorAll('.me-menu-item');
var menu_indicator = document.querySelector('.me-nav-indicator');
var menu_current_item = document.querySelector('.me-current');
var menu_position;

menu_position = menu_current_item.offsetLeft - 16;
menu_indicator.style.left = menu_position + 'px';
menu_bar.style.backgroundPosition = menu_position -8 + 'px';
menu_item.forEach(
  function(select_menu_item){
    select_menu_item.addEventListener('click', function(e){
      e.preventDefault();
      menu_position = this.offsetLeft - 16;
      menu_indicator.style.left = menu_position + 'px';
      menu_bar.style.backgroundPosition = menu_position -8 + 'px';
      [...select_menu_item.parentElement.children].forEach(
        sibling => {
          sibling.classList.remove('me-current');
        })
      select_menu_item.classList.add('me-current');
    });
  }
)

/* onclick */
function meHome() {
    window.location.href = '#';
}
function meCollect() {
    window.location.href = '#collection';
}
function meLike() {
    window.location.href = '#like';
}
function mAbout() {
    window.location.href = '#about';
}

function mStudy() {
    window.location.href = '#study';
}

function mContact() {
    window.location.href = '#contact';
}
