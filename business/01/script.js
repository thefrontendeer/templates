window.addEventListener("resize", function () {
  if (window.innerWidth > 992) {
    if (
      document.getElementById("navContent").classList.contains("d-none") ===
      false
    ) {
      document.getElementById("navContent").classList.add("d-none");
      document
        .getElementsByTagName("header")[0]
        .children[0].classList.remove("br-20");
    }
  }
});
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  document.getElementById("navContent").classList.toggle("d-none");
  document
    .getElementsByTagName("header")[0]
    .children[0].classList.toggle("br-20");
});
