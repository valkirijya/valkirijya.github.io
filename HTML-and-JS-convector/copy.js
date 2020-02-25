let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let sections = document.querySelector("rows");
let num;
let someText = ["Some text"];
let resultat;
const uan = [
  350,
  210,
  85,
  65,
  780,
  52,
  85,
  145,
  793,
  560,
  230,
  126,
  56,
  26,
  52,
  85,
  64,
  35,
  56,
  556,
  452
];

//for (let i = 0; i < 100; i++) {
// uan[i] = Math.round(Math.random() * 100);
//}

buttons[1].addEventListener("click", valueNum);

function valueNum() {
  num = input.value;
  for (let i = 0; i < num; i++) {
    switch (i) {
      case 0:
      case 3:
      case 6:
      case 9:
      case 12:
        someText[i] =
          "Чтобы в комнате сохранить ощущение легкости и свободы, в интерьере должен присутствовать белый цвет. Сочетание белого с любым выбранным цветом или использование белого в качестве основног цвета в детской гарантированно обеспечит легкую, воздушную атмосферу. \n \n";
        break;

      case 1:
      case 4:
      case 7:
      case 10:
      case 13:
        someText[i] =
          "Потолок красим в белый цвет и выбираем светлую мебель. Хотя, на фоне светлых стен и потолка, мебель может быть и более темного цвета, не белой. Ощущение света и простора все равно останется в комнате. Мебель цвета темного дерева добавит комнате тепла и будет выглядеть очень изысканно. \n \n";
        break;

      case 2:
      case 5:
      case 8:
      case 11:
      case 14:
        someText[i] =
          "Такой дизайн-проект, как спальня в стиле лофт безусловно имеет отношения к современному направлению дизайна, но в то же время декор для него выбирается винтажный, мебель может быт антикварной, а некоторые арт-объекты используемые для украшения не несут никакой функциональной нагрузки, как требует того минимализм или хай-тек. Лофт остался между дворцовой классикой и оснащенной “до зубов” техникой современностью.\n \n";
        break;
    }
    if (i > 14) {
      someText[i] =
        "Потолок красим в белый цвет и выбираем светлую мебель. Хотя, на фоне светлых стен и потолка, мебель может быть и более темного цвета, не белой. Ощущение света и простора все равно останется в комнате. Мебель цвета темного дерева добавит комнате тепла и будет выглядеть очень изысканно. \n \n";
    }
  }

  function GenerateFig() {
    for (let i = 0; i < num; i++) {
      let element = document.createElement("figure");
      element.className = "figure";
      sections.appendChild(element);
    }
  }

  function ChangeFig() {
    let elements = document.getElementsByClassName("figure");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerText = "Элемент №" + (i + 1);
      let picture = document.createElement("img");
      picture.src = "https://picsum.photos/400/200/?" + i;
      elements[i].appendChild(picture);
      let paragraf = document.createElement("p");
      elements[i].appendChild(paragraf);

      praise = uan[i] + "  UAN";
      paragraf.innerText = someText[i] + "Цена: \n";

      let praiseValue = document.createElement("h3");
      praiseValue.className = "pV";
      paragraf.appendChild(praiseValue);
      praiseValue.innerText = praise;
    }
  }
  setTimeout(GenerateFig, 500);
  setTimeout(ChangeFig, 600);
}

///////////////////////////////////////////////////////////

let exchangeRates = null;
buttons[0].addEventListener("click", calculate);
let curs;

function calculate() {
  let currencySelect = document.getElementById("currencyCode");
  let currencyCode = currencySelect.options[currencySelect.selectedIndex].value;
  let currencyInfo = null;

  for (let i = 0; i < exchangeRates.length; i++) {
    if (exchangeRates[i].txt === currencyCode) {
      currencyInfo = exchangeRates[i];
      break;
    }
  }
  let changePraise = document.querySelectorAll(".pV");
  for (let i = 0; i < changePraise.length; i++) {
    changePraise[i].innerText =
      (uan[i] / currencyInfo.rate).toFixed(2) + "  " + currencyInfo.cc;
  }
}

function generateCourses(courses) {
  let currencySelect = document.getElementById("currencyCode");

  for (let i = 0; i < courses.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", courses[i].txt);
    option.innerHTML = courses[i].txt;
    currencySelect.appendChild(option);
  }
}
function processRequestData() {
  if (this.readyState == 4) {
    if (httpRequest.status == 200) {
      console.log("Ответ получен.");

      let result = JSON.parse(httpRequest.responseText);
      exchangeRates = result;
      generateCourses(result);
    } else {
      console.error("Ошибка выполнения запроса!");
    }
  }
}

function getCourses() {
  console.log("Документ загружен.");
  httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    console.log("Ошибка создания XMLHttpRequest!");
    return false;
  }
  httpRequest.onreadystatechange = processRequestData;
  httpRequest.open(
    "GET",
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
    true
  );
  httpRequest.send(null);
  console.log(httpRequest);
}
