const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const container = document.querySelector('.container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let counterImages = 0;
//let sliderHtml = '';
//let thumbsHtml = '';
let numImages = 5;

const dati = [
  {
    immagine:"http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    luogo: "Svezia",
    descrizione:"ibra è nato in Svezia",

  },
  {
    immagine:"https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    luogo: "Peru",
    descrizione:"Viva il peru",

  },
  {
    immagine:"https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    luogo: "Chile",
    descrizione:"Chile is nice",

  },
  {
    immagine:"https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    luogo: "Argentina",
    descrizione:"Ho tanti amici Argentini",

  },
  {
    immagine:"https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    luogo: "Colombia",
    descrizione:"Colombia è top",

  },

];

dati.forEach(dato => {
  console.log(dato);
  slider.innerHTML += `<div class='slider'> <img class="item" src="${dato.immagine}"/></div>
  <div class="text">
          <h3>${dato.luogo}</h3>
          <p>${dato.descrizione}</p>
        </div>`
});

dati.forEach(dato => {
  thumbs.innerHTML += `<div class='thumbs'> <img class="item-thumbs" src="${dato.immagine}"/></div>`
});

const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumbs');
const listTexts = document.getElementsByClassName('text');

//listImages[counterImages].classList.add('active');
//listthumbs[counterImages].classList.add('active');
//listTexts[counterImages].classList.add('active');

prev.addEventListener('click', () => {
  nextPrev(true);
});

next.addEventListener('click', function () {
  nextPrev(false);
});

function nextPrev(isNext) {
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  listTexts[counterImages].classList.remove('active');
  if (isNext) {
    counterImages--;
    if (counterImages < 0) counterImages = numImages - 1;
  } else {
    counterImages++;
    if (counterImages === numImages) counterImages = 0;
  }
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
  listTexts[counterImages].classList.add('active');
}


let isOver = false;
//genero un loop infinito di foto
setInterval(function(){
  if(!isOver) nextPrev(false);
}, 2000);

container.addEventListener('mouseover', function(){
  isOver = true;
  //console.log("entro");
})

container.addEventListener('mouseout', function(){
  isOver = false;
  //console.log("esco");
})




















