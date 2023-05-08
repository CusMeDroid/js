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

let TXThtml = document.getElementsByClassName("htmlTXT").value;
let OutHtml = document.getElementById("vhtml");
if (!TXThtml) {
  OutHtml.innerHTML = "";
} else {
  OutHtml.innerHTML = TXThtml;
}
let TXTcss = document.getElementsByClassName("cssTXT").value;
let TXTjs = document.getElementsByClassName("jsTXT").value;

function openFile (textToEncode, contentType, newWindow) {
    var encodedText = window.btoa(textToEncode);
    var dataURL = 'data:' + contentType + ';base64,' + encodedText;
    if (newWindow) {
        window.open(dataURL);
    }
    else {
        window.location = dataURL;
    }
}
