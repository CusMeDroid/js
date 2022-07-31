/* Fungtion for autocomplete
* Add your sugest in here
* This is project by CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/
var repositories = ['guide/html','guide/css','guide/js','guide/audio','guide/video',
  'home','docs','roadmap','privacy','IyoRTML',
  'cv','cv/suryodwijayanto','cv/sahrul','cv/mohjakayulianto','Suryo DwiJayanto','Sahrul','Moh Jaka Yulianto',
  'android-studio','ip2location-contest','j-shop','blog','desktop'
];
autocomplete(document.getElementById('search'), repositories);
/* Function button click
* Last your input sugest you can add action here!
* This is project by CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/
function submitFunc() {
    var search = document.getElementById('search');
    if (search.value < 1) {
        alert('Please fill out this field!');
    } else if (search.value == 'Suryo DwiJayanto') {
        window.location.href = 'cv/suryodwijayanto';
    } else if (search.value == 'Sahrul') {
        window.location.href = 'cv/sahrul';
    } else if (search.value == 'Moh Jaka Yulianto') {
        window.location.href = 'cv/mohjakayulianto';
    } else if (search.value == 'IyoRTML') {
        window.location.href = 'https://google.com/search?q=IyoRTML';
    } else {
        window.location.href = search.value;
    }
}
