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
      let row = document.querySelector(".row");
      row.appendChild(element);
    }
  })
  .catch(err => {
    throw err;
  });
