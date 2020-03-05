let url = "https://valkirijya.github.io/images/fo-galery/photo.json";
let scale;
let width = document.documentElement.clientWidth;
if (540 < width) {
  scale = 1.8;
} else if (420 < width < 540) {
  scale = 1.4;
} else if (330 < width < 420) {
  scale = 1.1;
} else {
  scale = 1;
}

fetch(url)
  .then(res => res.json())
  .then(out => {
    console.log("Checkout this JSON! ", out);
    let outData = out;
    for (let i = 0; i < 24; i++) {
      let div = document.createElement("div");
      div.className = "foto";
      let element = document.createElement("img");
      element.className = "image";
      let par = document.createElement("p");
      par.className = "description";
      par.innerText = `${outData[i].text}`;
      element.setAttribute("src", `${outData[i].photo}`);
      if (i % 2 == 0) {
        div.setAttribute(
          "style",
          `transform: rotate(${Math.round(Math.random() * 10)}deg);`
        );
      } else {
        div.setAttribute(
          "style",
          `transform: rotate(-${Math.round(Math.random() * 10)}deg);`
        );
      }
      div.appendChild(element);
      div.appendChild(par);
      let row = document.querySelector(".row");
      row.appendChild(div);
    }
    let img = document.querySelectorAll(".foto");
    for (let i = 0; i < img.length; i++) {
      img[i].addEventListener("mousedown", setOver);
      function setOver() {
        img[i].setAttribute(
          "style",
          `transform: scale(${scale}); z-index: 20; transition: 0.5s;`
        );
        img[i].addEventListener("mouseup", setOut);
        function setOut() {
          img[i].setAttribute(
            "style",
            `transform: rotate(${Math.round(
              Math.random() * 10
            )}deg); z-index: 1; transition: 0.2s; `
          );
        }
      }
    }
  })
  .catch(err => {
    throw err;
  });
