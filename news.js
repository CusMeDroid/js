let mmurl = 'https://docs.google.com/spreadsheets/d/16jLiTOUMuXSw8ymsevQ9lRS-mg6fmDWihBAri1oe9xo/gviz/tq?';
const mmlkjs = document.querySelector('.mmlkjs');
const mmquery = encodeURIComponent('SELECT B,C,D ORDER BY A ASC');
console.log(mmquery);
mmurl = mmurl + '&tq=' + mmquery;

fetch(mmurl)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('class', 'row');
    data.table.rows.forEach((main)=>{
    mmlkjs.append(container);
    console.log(main.c[0]);
    const imgna = main.c[0];
    console.log(main.c[1]);
    const titlena = main.c[1];
    console.log(main.c[2]);
    const descna = main.c[2];
    const fullLink = imgna.v;
    const fullTit = titlena.v;
    const fullDes = descna.v;
    console.log(fullLink);
    const column = document.createElement('div');
    const card = document.createElement('div');
    //const link = document.createElement('a');
    const elem = document.createElement('img');
    const huah = document.createElement('h2');
    const desc = document.createElement('p');
    //const bbtn = document.createElement('button');
    //const hreff = document.createElement('a');
    column.setAttribute('class', 'column0');
    card.setAttribute('class', 'card');
    //link.setAttribute('href', fullHref);
    // link.setAttribute('target', '_blank');
    //link.setAttribute('title', 'CusMeDroid');
    //link.setAttribute('style', 'display: block;');
    elem.setAttribute('src', fullLink);
    elem.setAttribute('title', fullTit);
    elem.setAttribute('alt', fullTit);
    elem.setAttribute('class', 'card-img');
    huah.innerHTML = fullTit;
    huah.setAttribute('class', 'black Audiowide padd-8');  
    
    desc.innerHTML = fullDes;
    desc.setAttribute('class', 'padd-8 Trirong');
    //bbtn.setAttribute('class', 'Trirong green radius-20 blog-btn');
    
    /*
    hreff.setAttribute('title', 'More ' + fullTit);
    hreff.innerHTML = 'More..';
    hreff.setAttribute('class', 'padd-4 Trirong white size-16');
    hreff.setAttribute('href', 'https://forms.gle/ius5GDxnpi9LcutRA');
    hreff.setAttribute('target', '_blank');
    */


    container.appendChild(column);
    column.appendChild(card);
    card.appendChild(elem);
    // link.appendChild(elem);
    card.appendChild(huah);
    card.appendChild(desc);
    //bbtn.appendChild(hreff);
    //card.appendChild(bbtn);
  })
  console.log(data);
})
