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

var mainCode = '<!DOCTYPE html>'
'<html>'
'<head>'
'<link rel="stylesheet" type="text/css" href="style.css" />'
'</head>'
'<body>';
var endCode = '</body>'
'</html>';

const mhtml = document.getElementById("html-code");
const mcss = document.getElementById("css-code");
const mjs = document.getElementById("js-code");
const mout = document.getElementById("output");

function run() {
  let htmlCode = mhtml.value;
  let cssCode = mcss.value;
  let jsCode = mjs.value;
  let output = mout;

  output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
  output.contentWindow.eval(jsCode);
}

function save(filename, html) {
  var el = document.createElement('a');
  el.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
  el.setAttribute('download', filename);
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}
