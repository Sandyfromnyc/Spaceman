  /*----- constants -----*/
const MAN_LOOKUP = {
    all: {img:'imgs/spaceman-0.jpg'},
    one: {img:'imgs/spaceman-1.jpg'}
    two: {img:'imgs/spaceman-2.jpg'},
    three: {img:'imgs/spaceman-3.jpg'},
    four: {img:'imgs/spaceman-4.jpg'},
    five: {img:'imgs/spaceman-5.jpg'},
    six: {img:'imgs/spaceman-6.jpg'}
};

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
let guessed = [];
let wordStatus = null;
let gameStatus;


  /*----- state variables -----*/
let rightLetters;  // guessed letters to guess word

let wrongLetters; // guessed letters are wrong - a piece of spaceman disappears

  /*----- cached elements  -----*/
const message = document.getElementById('message')
const guess = document.getElementById()
const letterButtons = [document.querySelectorAll('section > button')];
const playButton = document.getElementById('playButton');
const spaceMan = document.querySelector('img');
  /*----- event listeners -----*/
document.querySelector('section').addEventLister('click', handleClick);
playButton.addEventLister('click', init);

  /*----- functions -----*/
init();

function handleClick(evt) {
    console.log(evt.target)
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
    spaceMan.src = `img/spaceman-${mistake.length}.jpeg`
    spaceMan.src = `img/spaceman-${wrongGuesses.length}.jpg`;
}
