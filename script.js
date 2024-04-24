let tl = gsap.timeline();

function overlay() {
  tl.to(".overlay", {
    top: 0,
    duration: 1,
    delay: 1,
  })
  .to(".overlay", {
    top: "-100%",
    duration: 1,
    delay: 0.5,
  })
  .to(".overlay", {
    top: "100%",
    duration: 0,
  })
}
overlay();

setInterval(overlay, 3000);