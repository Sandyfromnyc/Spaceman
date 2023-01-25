  /*----- constants -----*/
const WORDS = ["PLANET", "ORBIT", 'STARS', "METEOR", "COSMOS", 
"GALAXY", "STARBURST", "NEBULA"];


const maxWrong = 6;
const IMGS = [
    "imgs/spaceman-0.jpg"

]
let answer = " ";
let wrongGuesses = [];
let wordStatus = null;
let gameStatus;


  /*----- state variables -----*/
let rightLetters; 
let wrongLetters; 

  /*----- cached elements  -----*/
const messageEl = document.getElementById('message')
const letterButtons = [document.querySelectorAll('section > button')];
const playButton = document.getElementById('playButton');
const spaceMan = document.querySelector('img');
const guessEl = document.getElementById('spotLight');

  /*----- event listeners -----*/
document.querySelector('section').addEventListener('click', handleClick);
playButton.addEventListener('click', init);

  /*----- functions -----*/
init()


function handleClick(evt) {
    const letter = evt.target.textContent
    if (gameStatus === 'W' || evt.target.tagName !== 'BUTTON') return;
    console.log(evt.target.textContent)
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
  if (wrongGuesses.length > maxWrong) return "L";
  return null;

}

function renderMessage() {
  if(gameStatus === "W") {
    messageEl.textContent = "You saved the Spaceman!!";
  } else if (gameStatus === "L") {
    messageEl.textContent = "You sent the Spaceman to Space!!!";
  } else { 
    messageEl.textContent = `You have ${maxWrong - wrongGuesses.length} tries left!!`
  }

}

function init() {
    wrongGuesses = [];
    answer = WORDS[Math.floor(Math.random() * WORDS.length)].split(''); 
    wordStatus = answer.map(ltr => ltr === "" ? "" : "_");
    gameStatus = null;
    render ()
}


function render() {
    renderMessage();
    guessEl.textContent = wordStatus.join("")
    spaceMan.src = `imgs/spaceman-${wrongGuesses.length}.jpg`;
}

