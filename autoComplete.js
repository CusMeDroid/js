/*
* This for cv theme, i don't want to break my style just because of code change!
* Please Do Not Remove This
* 7/22/2022
* CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*
  * Powered by
  * CusMeDroid
  * IyoRTML
  * Suryo DwiJayanto
  */
  inp.addEventListener("keydown", function(e) {
      var sauto = document.getElementById(this.id + "autocomplete-list");
      if (sauto) sauto = sauto.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(sauto);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(sauto);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (sauto) sauto[currentFocus].click();
        }
      }
  });
  /*
  * Powered by
  * CusMeDroid
  * IyoRTML
  * Suryo DwiJayanto
  */
  function addActive(sauto) {
    if (!sauto) return false;
    removeActive(sauto);
    if (currentFocus >= sauto.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (sauto.length - 1);
    sauto[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(sauto) {
    for (var i = 0; i < sauto.length; i++) {
      sauto[i].classList.remove("autocomplete-active");
    }
  }
  /*
  * Powered by
  * CusMeDroid
  * IyoRTML
  * Suryo DwiJayanto
  */
  function closeAllLists(elmnt) {
    var sauto = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < sauto.length; i++) {
      if (elmnt != sauto[i] && elmnt != inp) {
        sauto[i].parentNode.removeChild(sauto[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  /*
  * Powered by
  * CusMeDroid
  * IyoRTML
  * Suryo DwiJayanto
  */
}
