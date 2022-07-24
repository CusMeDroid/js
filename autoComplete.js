/*
* This for cv theme, i don't want to break my style just because of code change!
* Please Do Not Remove This
* 7/22/2022
* CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var sauto = document.getElementById(this.id + "autocomplete-list");
      if (sauto) sauto = sauto.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(sauto);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(sauto);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (sauto) sauto[currentFocus].click();
        }
      }
  });
  function addActive(sauto) {
    /*a function to classify an item as "active":*/
    if (!sauto) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(sauto);
    if (currentFocus >= sauto.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (sauto.length - 1);
    /*add class "autocomplete-active":*/
    sauto[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(sauto) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < sauto.length; i++) {
      sauto[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var sauto = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < sauto.length; i++) {
      if (elmnt != sauto[i] && elmnt != inp) {
        sauto[i].parentNode.removeChild(sauto[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var repositories = ["cv","cv/suryodwijayanto","cv/sahrul","cv/mohjakayulianto","android-studio","ip2location-contest"];

/*initiate the autocomplete function on the "search" element, and pass along the repositories array as possible autocomplete values:*/
autocomplete(document.getElementById("search"), repositories);
