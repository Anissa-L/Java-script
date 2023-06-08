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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

const lastSlide = slides.length - 1;

// Create as many dots as slides in  the banner
for (let i = 0; i < slides.length; i++) {
  const dotDiv = document.createElement("div");
  dotDiv.className = "dot";
  dots.appendChild(dotDiv);
}

const allDots = document.querySelectorAll(".dot");
allDots[0].classList.add("dot_selected");

// Arrow left

arrowLeft.addEventListener("click", () => {
  console.log(index);
  allDots[index].classList.remove("dot_selected");

  if (index === 0) {
    index = lastSlide; //if we are on the first slide make the next left click goes to the last slide
  } else {
    index--;
  }

  bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  allDots[index].classList.add("dot_selected");

  console.log(index);

  allDots[index].classList.add("dot_selected");

  console.log("arrow Left !");
});

// Arrrow right

arrowRight.addEventListener("click", () => {
  console.log("arrow right !");
});
