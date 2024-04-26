let tl = gsap.timeline();

function overlay() {
  tl.to(".overlay", {
    top: "100%",
    duration: 0,
    delay: 3,
  })
  
  .to(".overlay", {
    top: 0,
    duration: 1,
    delay: 1,
  })
  .to(".overlay", {
    top: "-100%",
    duration: 1,
    delay: 0.5,
  })
}
overlay();

setInterval(overlay, 3000);

gsap.to(".first h1, .third h1", {
  x: -200,
  scrollTrigger: {
    trigger: ".first h1, .third h1",
    markers: true,
    start: "top -5%",
    end: "top -90%",
    scrub: 3,
  }
})

gsap.to(".second h1, .fourth h1", {
  x: 200,
  scrollTrigger: {
    trigger: ".first h1, .thrid h1",
    markers: true,
    start: "top -5%",
    end: "top -90%",
    scrub: 3,
  }
})

gsap.to(".first h5, .third h5", {
  x: 200,
  scrollTrigger: {
    trigger: ".first h1, .thrid h1",
    markers: true,
    start: "top -5%",
    end: "top -90%",
    scrub: 3,
  }
})

gsap.to(".second h5, .fourth h5", {
  x: -200,
  scrollTrigger: {
    trigger: ".first h1, .thrid h1",
    markers: true,
    start: "top -5%",
    end: "top -90%",
    scrub: 3,
  }
})

gsap.to(".bg", {
  scrollTrigger: {
    trigger: ".bg",
    scroller: "body",
    start: "top -5%",
    end: "top -90%",
    scrub: 3,
  },
  opacity: 0.5,
})

let arr = [
  "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1559&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function linearImageChange() {
  let currentIdx = 0;
  function imageChange() {
    document.querySelector(".page1-img img").src = arr[currentIdx];
    currentIdx = (currentIdx + 1) % arr.length; //  move to next image
  }
  setInterval(imageChange, 5000);
}
linearImageChange();
