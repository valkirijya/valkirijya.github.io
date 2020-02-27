let btn = document.querySelector(".scroll-top-btn");
console.log(btn);

window.addEventListener('scroll', check);
function check() {
if ((document.documentElement.clientHeight)/3 < window.pageYOffset) {
    btn.setAttribute('style', "visibility: visible;");
} else { btn.setAttribute('style', "visibility: hidden;");}
};
