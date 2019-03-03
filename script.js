
var Do = new Audio("sounds/E4.mp3");
var Re = new Audio("sounds/F4.mp3");
var Mi = new Audio("sounds/G4.mp3");
var Fa = new Audio("sounds/A4.mp3");
var Sol = new Audio("sounds/B4.mp3");
var La = new Audio("sounds/C5.mp3");
var Si = new Audio("sounds/D5.mp3");

var playSound = audio => {
    var clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
  };

  var toucheDo = document.querySelector(".do");
  var playDo = () => {
    playSound(Do);
  };
  toucheDo.addEventListener("click", playDo);

  var toucheRe = document.querySelector(".re");
  var playRe = () => {
    playSound(Re);
  };
  toucheRe.addEventListener("click", playRe);

  var toucheMi = document.querySelector(".mi");
  var playMi = () => {
    playSound(Mi);
  };
  toucheMi.addEventListener("click", playMi);

  var toucheFa = document.querySelector(".fa");
  var playFa = () => {
    playSound(Fa);
  };
  toucheFa.addEventListener("click", playFa);

  var toucheSol = document.querySelector(".sol");
  var playSol = () => {
    playSound(Sol);
  };
  toucheSol.addEventListener("click", playSol);

  var toucheLa = document.querySelector(".la");
  var playLa = () => {
    playSound(La);
  };
  toucheLa.addEventListener("click", playLa);

  var toucheSi = document.querySelector(".si");
  var playSi = () => {
    playSound(Si);
  };
  toucheSi.addEventListener("click", playSi);


  window.addEventListener("keydown", ({ keyCode }) => {
    
    if (keyCode === 68) return playDo();
    if (keyCode === 70) return playRe();
    if (keyCode === 71) return playMi();
    if (keyCode === 72) return playFa();
    if (keyCode === 74) return playSol();
    if (keyCode === 75) return playLa();
    if (keyCode === 76) return playSi();

  
  }); 
