let btn = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", check);
function check() {
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  console.log(scrollHeight + " - scrollHeight");
  if (
    ((document.documentElement.clientHeight / 3) < window.pageYOffset) &&
    ((scrollHeight - 340) > window.pageYOffset)
  ) {
    btn.setAttribute("style", "visibility: visible;");
  } else {
    btn.setAttribute("style", "visibility: hidden;");
  }
};
