let btn = document.querySelector(".scroll-top-btn");
console.log(btn);

/*btn.addEventListener('click', scrolling);
function scrolling () {
    if(document.documentElement.clientHeight > window.pageYOffset) {
        btn.setAttribute('style', "visibility: hidden;");   
    }
};*/

window.addEventListener('scroll', check);
function check() {
if ((document.documentElement.clientHeight)/3 < window.pageYOffset) {
    btn.setAttribute('style', "visibility: visible;");
} else { btn.setAttribute('style', "visibility: hidden;");}
};

console.log("worcs!");
