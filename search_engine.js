/* Fungtion for autocomplete
* Add your sugest in here
* This is project by CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/
var repositories = ['guide/html','guide/css','guide/js','guide/audio','guide/video',
  'home','docs','roadmap','privacy','IyoRTML','Amazon','Google','Yahoo','Twitter','Facebook','Instagram','TikTok',
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
    }
    /* Medsos */
    else if (search.value == 'Amazon') {
        window.location.href = 'https://amazon.com';
    } else if (search.value == 'Google') {
        window.location.href = 'https://google.com/search?q=CusMeDroid';
    } else if (search.value == 'Yahoo') {
        window.location.href = 'https://yahoo.com/search?q=CusMeDroid';
    } else if (search.value == 'Twitter') {
        window.location.href = 'https://twitter.com/IyoRTML';
    } else if (search.value == 'Facebook') {
        window.location.href = 'https://facebook.com/suryo.dwijayantoskom';
    } else if (search.value == 'Instagram') {
        window.location.href = 'https://instagram.com/suryodwijayanto';
    } else if (search.value == 'TikTok') {
        window.location.href = 'https://tiktok.com/@suryodwijayanto';
    } else {
        window.location.href = search.value;
    }
}
