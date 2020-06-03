let butRight = document.querySelector(".right");
let butLeft = document.querySelector(".left");
let mainFoto = document.querySelector(".fild > div > img");
let mas = [
  "images/paint/0.jfif",
  "images/paint/1.jfif",
  "images/paint/2.jfif",
  "images/paint/3.jfif",
  "images/paint/4.jfif"
];
let current = 0;

const stepRight = () => {
  let foto = document.querySelector(".fild > div > img");
  if (current < mas.length - 1) current++;
  else current = 0;
  foto.src = mas[current];

  // foto.classList.add('non-shadow');
  foto.classList.remove('shadow');
  foto.classList.add('shadow');
  // foto.classList.toggle('non-shadow');
  
};
butRight.addEventListener("click", stepRight);

const stepLeft = () => {
  let foto = document.querySelector(".fild > div > img");
  if (current > 0) current--;
  else current = mas.length - 1;
  foto.src = mas[current];
};
butLeft.addEventListener("click", stepLeft);
