  /*----- constants -----*/
const WORDS = ["PLANET", "ORBIT", 'STARS', "METEOR", "COSMOS", 
"GALAXY", "STARBUUST", "NEBULA"];

const HINT = ["we live in one", "a circuit that takes object around", 
"glowing matter", "a piece of matter that enters Earth's atmosstphere", "The universe", 
"collection of stars and their solar system", "instense activity forming lots of glowing matter", 
"cloud of dust and gas in space" ];

const maxWrong = 6;
const IMGS = [
    "imgs/spaceman-0.jpg"

]
let answer = " ";
let mistakes = 0;
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

  /*----- event listeners -----*/
document.querySelector('section').addEventLister('click', handleClick);
playButton.addEventLister('click', init);

  /*----- functions -----*/
init();

function handleClick(evt) {
    const letter = evt.target.textContent
    if (gameStatus || evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter)  || secretWord.includes(letter)) return;
    console.log(evt.target.textContent)
    if (secretWord.includes(letter)){
       secretWord.forEach((char, idx) => {
        if (char === letter) wordStatus[idx] = letter;
       });
    } else {
        wrongGuesses.push(letter);   
    }
    render();
}

function init() {
    secretWord = WORDS[Math.floor(Math.random() * WORDS.length)].split(''); 
    wordStatus = answer.map(ltr => '_')
    //more than one word
    //wordStats = answer.map(ltr => ltr === " " ? " " : " _ ")
    gameStatus = null;
    render ()
}

function render() {
    guess.textContent = wordStatus.join("")
    spaceMan.src = `imgs/spaceman-${mistake.length}.jpg`
    spaceMan.src = `imgs/spaceman-${wrongGuesses.length}.jpg`;
}

