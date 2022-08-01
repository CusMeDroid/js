/* Fungtion for autocomplete
* Add your sugest in here
* This is project by CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/
var repositories = ['guide/html','guide/css','guide/js','guide/audio','guide/video','iPlay Music','Rumah Sayur Bogor',
  'home','docs','roadmap','privacy','CusMeDroid','IyoRTML','Amazon','Google','Yahoo','Twitter','Facebook','Instagram','TikTok',
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
    } else if (search.value == 'CusMeDroid') {
        window.location.href = 'https://cusmedroid.ink';
    }
    /* Beyond our search */
    else if (search.value == 'IyoRTML') {
        window.open('https://google.com/search?q=IyoRTML');
    } else if (search.value == 'iPlay Music') {
        window.open('https://sites.google.com/view/iplay');
    } else if (search.value == 'Rumah Sayur Bogor') {
        window.open('https://sites.google.com/view/rumahsayurbogor');
    } else if (search.value == 'Amazon') {
        window.open('https://amazon.com');
    } else if (search.value == 'Google') {
        window.open('https://google.com/search?q=CusMeDroid');
    } else if (search.value == 'Yahoo') {
        window.open('https://yahoo.com/search?q=CusMeDroid');
    } else if (search.value == 'Twitter') {
        window.open('https://twitter.com/IyoRTML');
    } else if (search.value == 'Facebook') {
        window.open('https://facebook.com/suryo.dwijayantoskom');
    } else if (search.value == 'Instagram') {
        window.open('https://instagram.com/suryodwijayanto');
    } else if (search.value == 'TikTok') {
        window.open('https://tiktok.com/@suryodwijayanto');
    } else {
        window.location.href = search.value;
    }
}
