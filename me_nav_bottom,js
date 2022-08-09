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
