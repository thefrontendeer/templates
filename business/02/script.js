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

// Animations
gsap.registerPlugin(ScrollTrigger);
gsap.from("#img-basic", {
  duration: 2,
  x: -1000,
  opacity: 0,
  ease: "power2.out",
});
gsap.from("#basic-info", {
  duration: 1.5,
  delay: 0.5,
  opacity: 0,
  x: 100,
  scale: 0,
  ease: "power2.out",
});
gsap.from(".card", {
  duration: 1,
  scrollTrigger: {
    trigger: ".cards",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  scale: 0,
  ease: "power1.out",
});
gsap.from(".aim", {
  duration: 1,
  scrollTrigger: {
    trigger: ".aims",
    start: "top 70%",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  scale: 0,
  x: 400,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".welcome .head img", {
  duration: 1,
  scrollTrigger: {
    trigger: ".welcome",
    start: "top 80%",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  x: 400,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".welcome .head div", {
  duration: 1,
  scrollTrigger: {
    trigger: ".welcome",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  x: -400,
  ease: "power1.out",

  opacity: 0,
});
gsap.from(".welcome .head + div", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".welcome",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  y: 400,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".welcome .head + div button", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".welcome",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  x: -200,
  y: 200,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".together .title", {
  scrollTrigger: {
    trigger: ".together",
    start: "20% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  x: -400,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".together .caption", {
  scrollTrigger: {
    trigger: ".together",
    start: "20% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.3,
  delay: 0.7,
  x: -200,
  opacity: 0,
  scale: 0,
  ease: "power1.out",
});
gsap.from(".together .btn", {
  scrollTrigger: {
    trigger: ".together",
    start: "20% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1,
  delay: 1,
  x: -300,
  opacity: 0,
  scale: 0,
  ease: "power1.out",
});
gsap.from(".employees .info", {
  scrollTrigger: {
    trigger: ".employees",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  x: -400,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".employees .info .btn", {
  scrollTrigger: {
    trigger: ".employees",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2.5,
  x: -400,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".employees .employee img", {
  scrollTrigger: {
    trigger: ".employee",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  rotation: 180,
  scale: 0,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".employees .employee .name", {
  scrollTrigger: {
    trigger: ".employee",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  y: 300,
  opacity: 0,
  ease: "power1.out",
});
gsap.from(".employees .employee .post", {
  scrollTrigger: {
    trigger: ".employee",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  scale: 0,
  ease: "power1.out",
});
gsap.from(".services img", {
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  opacity: 0,
  scale: 0,
  ease: "power1.out",
});
gsap.from(".services .title", {
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  x: -300,
  ease: "power1.out",
});
gsap.from(".services .btn", {
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  x: -300,
  ease: "power1.out",
});
gsap.from(".services .desc", {
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  x: 200,
  ease: "power1.out",
});
gsap.from(".about > div > div > div:nth-child(1)", {
  scrollTrigger: {
    trigger: ".about",
    start: "20% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  opacity: 0,
  x: -100,
  ease: "power1.out",
});
gsap.from(".about > div > div > div:nth-child(2)", {
  scrollTrigger: {
    trigger: ".about",
    start: "20% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  opacity: 0,
  y: -100,
  ease: "power1.out",
});
gsap.from(".about > div > div > div:nth-child(3)", {
  scrollTrigger: {
    trigger: ".about",
    start: "20% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  opacity: 0,
  y: 100,
  ease: "power1.out",
});
gsap.from(".about > div > div > div:nth-child(4)", {
  scrollTrigger: {
    trigger: ".about",
    start: "20% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  opacity: 0,
  x: 100,
  ease: "power1.out",
});
gsap.from(".contact h1", {
  scrollTrigger: {
    trigger: ".contact",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  scale: 0,
  ease: "power1.out",
});
gsap.from(".contact .cap", {
  scrollTrigger: {
    trigger: ".contact",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  scale: 0,
  ease: "power1.out",
});
gsap.from(".contact .box .info", {
  scrollTrigger: {
    trigger: ".contact",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  x: -200,
  ease: "power1.out",
});
gsap.from(".contact .box .form", {
  scrollTrigger: {
    trigger: ".contact",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  },
  duration: 2,
  opacity: 0,
  x: 200,
  ease: "power1.out",
});
