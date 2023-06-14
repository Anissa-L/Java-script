const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// constante

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

const lastSlide = slides.length - 1;
console.log(lastSlide);

// position indice 0

let index = 0;

// création d'autant de bullets points que de diapositive

for (let i = 0; i < slides.length; i++) {
  const dotDiv = document.createElement("div");
  dotDiv.className = "dot";
  dots.appendChild(dotDiv);
}
// ajout de la bullet qui signale la position

const allDots = document.querySelectorAll(".dot");
allDots[0].classList.add("dot_selected");

// Arrow left

arrowLeft.addEventListener("click", () => {
  console.log(index);
  allDots[index].classList.remove("dot_selected");

  if (index === 0) {
    index = lastSlide; // si nous sommes sur la première diapositive le prochain clic de gauche mènera à la dernière diapositive
  } else {
    index--;
  }

  // changement d'image et de texte
  bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  allDots[index].classList.add("dot_selected");

  console.log(index);

  console.log("arrow Left !");
});

// Arrrow right

arrowRight.addEventListener("click", () => {
  console.log(index);
  allDots[index].classList.remove("dot_selected");

  if (index === lastSlide) {
    index = 0; // si nous sommes sur la dernière diapositive le prochain clic de droite mènera à la première diapositive
  } else {
    index++;
  }

  // changement d'image et de texte

  bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  allDots[index].classList.add("dot_selected");

  console.log(index);

  console.log("arrow right !");
});
