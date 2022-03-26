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
