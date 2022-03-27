// Menu animation

const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-gauche");
const allItemsNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu.addEventListener("click", () => {
  ligne.classList.toggle("active");
  nav.classList.toggle("menu-visible");
});

if (window.matchMedia("(max-width: 1300px)")) {
  allItemsNav.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.toggle("menu-visible");
      ligne.classList.toggle("active");
    });
  });
}

// Text animation

const txtAnim = document.querySelector(".txt-animation");

let typewriter = new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(1800)
  .changeDelay(20)
  .typeString("Je suis Jessica ELESSA")
  .pauseFor(300)
  .typeString("<strong>, Développeuse Full Stack</strong> ")
  .pauseFor(1000)
  .deleteChars(11)
  .typeString('<span style="color: #27ae60;"><strong>CSS</strong></span>')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('<span style="color: #EA39ff;"><strong>React</strong></span> ')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString(
    '<span style="color: midnightblue;"><strong>React Native</strong></span> '
  )
  .pauseFor(1000)
  .deleteChars(14)
  .typeString(
    '<span style="color: #ff6910;"><strong>JavaScript</strong></span>'
  )
  .start();

// GSAP Animation + ScrollMagic for homepage

const navbar = document.querySelector(".nav-gauche");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".btn-acc");
const btnMedias = document.querySelectorAll(".media");
const btnRondAccueil = document.querySelector(".btn-rond");

const TL1 = gsap.timeline({ paused: true });

TL1.to(navbar, { left: "0px", ease: Power3.easeOut, duration: 0.6 })
  .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
  .staggerFrom(btn, 1, { opacity: 0 }, 0.2, "-=0.30")
  .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, "-=0.75")
  .from(
    btnRondAccueil,
    { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 },
    "-=1"
  );

window.addEventListener("load", () => {
  TL1.play();
});

// GSAP animation + ScrollMagic for presentation

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".pres-gauche");
const presDroite = document.querySelector(".pres-droite");
const listePres = document.querySelectorAll(".item-liste");

const tlpres = new TimelineMax();

tlpres
  .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
  .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5")
  .from(presDroite, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5")
  .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, "-=0.5");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlpres)
  // .addIndicators()
  .addTo(controller);

// Portfolio animation

const portfolioContainer = document.querySelector(".portfolio");
const titrePortfolio = document.querySelector(".titre-port");
const itemPortfolio = document.querySelectorAll(".vague1");

const tlPortfolio = new TimelineMax();

tlPortfolio
  .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene2 = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlPortfolio)
  // .addIndicators()
  .addTo(controller);

// Vague 2

const itemPortfolio2 = document.querySelectorAll(".vague2");

const tlPortfolio2 = new TimelineMax();

tlPortfolio2.staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene3 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(tlPortfolio2)
  // .addIndicators()
  .addTo(controller);

// Vague 3

const itemPortfolio3 = document.querySelectorAll(".vague3");

const tlPortfolio3 = new TimelineMax();

tlPortfolio3.staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene4 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio2,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(tlPortfolio3)
  // .addIndicators()
  .addTo(controller);
