const toAnimate = document.querySelector("div.animate");
const anim = document.querySelectorAll(".animate");

const testOptn = {
  threshold: 0,
  // rootMargin: "0px 0px -250px 0px"
};

const testObs = new IntersectionObserver(function(el, testObs) {
  el.forEach((e, i) => {
    console.log("Page loaded.")
    if (!e.isIntersecting) {
      return;
    } else {
      setTimeout(() => {e.target.classList.add("anim-once");}, 3000);
      setTimeout(() => {e.target.classList.remove("anim-once");}, 5000);
      testObs.unobserve(e.target);
    }
  });
},
testOptn);

document.onload = testObs.observe(toAnimate);
