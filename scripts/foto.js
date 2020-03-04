let url = "https://valkirijya.github.io/images/fo-galery/photo.json";

fetch(url)
  .then(res => res.json())
  .then(out => {
    console.log("Checkout this JSON! ", out);
    let outData = out;
    for (let i = 0; i < 24; i++) {
      let element = document.createElement("img");
      element.className = "scale";
      element.setAttribute("src", `${outData[i]}`);
      if (i % 2 == 0) {
        element.setAttribute(
          "style",
          `transform: rotate(${Math.round(Math.random() * 10)}deg);`
        );
      } else {
        element.setAttribute(
          "style",
          `transform: rotate(-${Math.round(Math.random() * 10)}deg);`
        );
      }
      let row = document.querySelector(".row");
      row.appendChild(element);
    }
    let img = document.querySelectorAll(".scale");
    for (let i = 0; i < img.length; i++) {
      img[i].addEventListener("mousedown", setOver);
      function setOver() {
        img[i].setAttribute(
          "style",
          "transform: scale(1.9); z-index: 20; padding: 8px; transition: 0.5s; "
        );
        img[i].addEventListener("mouseup", setOut);
      function setOut() {
        img[i].setAttribute(
          "style",
          `transform: rotate(${Math.round(Math.random() * 10)}deg); z-index: 1; transition: 0.2s; `
        );
      }
      }
     
    }
  })
  .catch(err => {
    throw err;
  });
