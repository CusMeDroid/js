var coll = document.getElementsByClassName('collapsible');
var clp;

for (clp = 0; clp < coll.length; clp++) {
  coll[clp].addEventListener('click', function() {
    this.classList.toggle('clpactive');
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    } 
  });
}