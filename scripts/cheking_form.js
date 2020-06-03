let form = document.querySelector('.contacts');
// let name = document.getElementById("name");
let message = document.querySelector('.message');

form.onsubmit = function (evt) {
  evt.preventDefault();
  // let names = Number(name.value);
  // if (names === 1) {
  //   para.textContent = "Поле с именем не может содержать цмфры!";
  //   para.style.color = "red";
  //   console.log("Поле с именем не может содержать цмфры!");
  // } else {
    message.textContent = "Письмо отправлено. В скором времени Вам ответят.";
    message.style.visibility = 'visible';
  // }
};
