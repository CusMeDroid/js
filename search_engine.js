/* Function for autocomplete
* Add your sugest in here
* This is project by CusMeDroid
* IyoRTML
* Suryo DwiJayanto
*/
var repositories = ['HTML','CSS','JS','JavaScript','Audio','Video','iPlay Music','Rumah Sayur Bogor',
  'home','docs','roadmap','privacy','CusMeDroid','IyoRTML','Amazon','Bing','Google','Yahoo','Twitter','Facebook','Instagram','TikTok',
  'cv','Suryo DwiJayanto','Sahrul','Moh Jaka Yulianto', 'TV Streaming Indonesia', 'TV Digital', 'Filter', 'Live Code Editor', 'Live Making Barcode',
  'Scan Barcode', 'BarCode', 'QRCode',
  'android-studio','ip2location-contest','j-shop','blog','desktop','navigation-bottom','collapse'
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
    } else if (search.value == 'Live Code Editor') {
        window.location.href = 'live-code-editor';
    } else if (search.value == 'Scan Barcode') {
        window.location.href = 'livemakingbarcode/scanner.html';
    } else if (search.value == 'BarCode') {
        window.location.href = 'livemakingbarcode/barcode.html';
    } else if (search.value == 'QRCode') {
        window.location.href = 'livemakingbarcode/qrcode.html';
    } else if (search.value == 'Live Making Barcode') {
        window.location.href = 'livemakingbarcode';
    } else if (search.value == 'TV Streaming Indonesia') {
        window.location.href = 'tv-streaming-indonesia';
    } else if (search.value == 'TV Digital') {
        window.location.href = 'qc-tv-digital';
    } else if (search.value == 'Filter') {
        window.location.href = 'filter';
    } else if (search.value == 'Suryo DwiJayanto') {
        window.location.href = 'cv/suryodwijayanto';
    } else if (search.value == 'Sahrul') {
        window.location.href = 'cv/sahrul';
    } else if (search.value == 'Moh Jaka Yulianto') {
        window.location.href = 'cv/mohjakayulianto';
    } else if (search.value == 'CusMeDroid') {
        window.location.href = 'https://cusmedroid.github.io';
    } else if (search.value == 'HTML') {
        window.location.href = 'guide/html';
    } else if (search.value == 'CSS') {
        window.location.href = 'guide/css';
    } else if (search.value == 'JS' || search.value == 'JavaScript') {
        window.location.href = 'guide/js';
    } else if (search.value == 'Audio') {
        window.location.href = 'guide/audio';
    } else if (search.value == 'Video') {
        window.location.href = 'guide/video';
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
    } else if (search.value == 'Bing') {
        window.open('https://www.bing.com/search?q=cusmedroid');
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
