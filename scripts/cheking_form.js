let form = document.querySelector("form");
let name = document.getElementById("name");
let submit = document.getElementById("submit");
let para = document.querySelector("p");

function submitEvent() {
  let names = Number(name.value);
  if (names === 1) {
    para.textContent = "Поле с именем не может содержать цмфры!";
    para.style.color = "red";
    console.log("Поле с именем не может содержать цмфры!");
  } else {
    para.textContent = "Письмо отправлено. В скором времени Вам ответят.";
    console.log("Письмо отправлено. В скором времени Вам ответят.");
  }
};
form.onsubmit = submitEvent;
