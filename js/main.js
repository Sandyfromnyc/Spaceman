  /*----- constants -----*/
const WORDS = ["PLANET", "ORBIT", 'STARS', "METEOR", "COSMOS", 
"GALAXY", "STARBURST", "NEBULA"];


const maxWrong = 6;
//const IMGS = [
//    "imgs/spaceman-0.jpg"

//]
let answer = " ";
let wrongGuesses = [];
let wordStatus = null;
let gameStatus;


  /*----- state variables -----*/


  /*----- cached elements  -----*/
const messageEl = document.getElementById('message')
const letterButtons = [...document.querySelectorAll('section > button')];
const playButton = document.getElementById('playButton');
const spaceMan = document.querySelector('img');
const guessEl = document.getElementById('spotLight');
const buttonStop = document.querySelector('section');

  /*----- event listeners -----*/
buttonStop.addEventListener('click', handleClick);
playButton.addEventListener('click', init);

  /*----- functions -----*/
init()


function handleClick(evt) {
  const letter = evt.target.textContent
  if (gameStatus === 'W' || evt.target.tagName !== 'BUTTON') return;
  if (gameStatus === "L") return;
  if (answer.includes(letter)){
       answer.forEach((char, idx) => {
        if (char === letter) wordStatus[idx] = letter;
       });
    } else {
        wrongGuesses.push(letter);   
    } 
    gameStatus = getWinner();
    render();
}
function getWinner() {
  if (!wordStatus.includes('_')) return "W";
  if (wrongGuesses.length >= maxWrong) return "L";
  return null;

}

function renderMessage() {
  if(gameStatus === "W") {
    messageEl.textContent = "You saved the Spaceman!!";
  } else if (gameStatus === "L") {
    messageEl.textContent = `You sent the Spaceman to Space!!!  The word was ${answer.join("")}`;
  } else { 
    messageEl.textContent = `You have ${maxWrong - wrongGuesses.length} tries left!!`
  }

}

function init() {
  answer = WORDS[Math.floor(Math.random() * WORDS.length)].split(''); 
  wrongGuesses = [];
  wordStatus = answer.map(ltr => ltr === "" ? "" : "_");
  gameStatus = null;
  render ()
}

function renderButtonStyle() {
  letterButtons.forEach(function(btn) {
    const letter = btn.textContent;
    if (wrongGuesses.includes(letter)) {
      btn.className = 'Incorrect'
    } else if (wordStatus.includes(letter)) {
      btn.className = 'Correct'
    } else {
      btn.className = ''
    }
  })
}

function render() {
    renderMessage();
    guessEl.textContent = wordStatus.join("");
    spaceMan.src = `imgs/spaceman-${wrongGuesses.length}.jpg`;
    renderButtonStyle()
}

