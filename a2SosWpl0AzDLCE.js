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

function downloadHTML(text, name, type) {
  var a = document.getElementById("html-code");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

function downloadCSS(text, name, type) {
  var b = document.getElementById("css-code");
  var file = new Blob([text], {type: type});
  b.href = URL.createObjectURL(file);
  b.download = name;
}

function downloadJS(text, name, type) {
  var c = document.getElementById("js-code");
  var file = new Blob([text], {type: type});
  c.href = URL.createObjectURL(file);
  c.download = name;
}
