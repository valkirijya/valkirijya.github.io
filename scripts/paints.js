let foto = document.querySelectorAll(".fild>img");
let butRight = document.querySelector(".right");
let butLeft = document.querySelector(".left");
let firstFoto = foto[0];

console.log(foto);
console.log(foto[0].attributes.src.nodeValue);

const stepLeft = () => {
  for (let i = 1; i < 5; i++) {
    if (currentFoto == foto[i]) {
      currentFoto = foto[i - 1];
      foto[i].setAttribute("src", `${foto[i - 1].attributes.src.nodeValue}`);
    }
  }
  return currentFoto;
};
butLeft.addEventListener("click", stepLeft);

const stepRight = () => {
  for (let i = 0; i < 3; i++) {
    if (firstFoto == foto[i]) {
      firstFoto = foto[i + 1];
      foto[i].setAttribute.src = `images/paint/${i + 1}.jfif`;
    }
  }
  return firstFoto;
};
butRight.addEventListener("click", stepRight);
