  /*----- constants -----*/
const WORDS = ["PLANET", "ORBIT", 'STARS', "METEOR", "COSMOS", 
"GALAXY", "STARBUUST", "NEBULA"];


const maxWrong = 6;
const IMGS = [
    "imgs/spaceman-0.jpg"

]
let answer = " ";
let wrongGuesses = [];
let wordStatus = null;
let gameStatus;


  /*----- state variables -----*/
let rightLetters;  // guessed letters to guess word

let wrongLetters; // guessed letters are wrong - a piece of spaceman disappears

  /*----- cached elements  -----*/
const message = document.getElementById('message')
//const wrongGuesses = document.getElementById()
const letterButtons = [document.querySelectorAll('section > button')];
const playButton = document.getElementById('playButton');
const spaceMan = document.querySelector('img');
const guessEl = document.getElementById('spotLight');

  /*----- event listeners -----*/
document.querySelector('section').addEventListener('click', handleClick);
playButton.addEventListener('click', init);

  /*----- functions -----*/


function handleClick(evt) {
    const letter = evt.target.textContent
    if (gameStatus || evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter)  || wordStatus.includes(letter)) return;
    console.log(evt.target.textContent)
    if (answer.includes(letter)){
       answer.forEach((char, idx) => {
        if (char === letter) wordStatus[idx] = letter;
       });
    } else {
        wrongGuesses.push(letter);   
    }
    render();
}

function init() {
    answer = WORDS[Math.floor(Math.random() * WORDS.length)].split(''); 
    wordStatus = answer.map(ltr => '_')
    //more than one word
    //wordStats = answer.map(ltr => ltr === " " ? " " : " _ ")
    wrongGuesses = [];
    gameStatus = null;
    render ()
}

init()

function render() {
    guessEl.textContent = wordStatus.join("")
    spaceMan.src = `imgs/spaceman-${wrongGuesses.length}.jpg`;
}

