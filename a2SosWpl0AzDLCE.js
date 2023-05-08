var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}

function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
  output.contentWindow.eval(jsCode);
}

const lhtml = document.getElementsByClassName('textHTML').value;

function save(filename, html) {
  var el = document.createElement('a');
  el.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
  el.setAttribute('download', filename);
  el.style.display = 'none';
  el.innerHTML = lhtml;
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}
