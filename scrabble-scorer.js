// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //



function initialPrompt() {
   let word = input.question("Let's play some Scrabble! \n \nEnter a word to score: ");
};

function scorerPrompt() {
  let arrayPrompt = input.question("Which scoring algorith would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system  \n Enter 0, 1, or 2: ");

  if (arrayPrompt == '0') {
    console.log('algorithm name: ', scoringAlgorithms[0].name);
    console.log('scoringFunction result: ', scoringAlgorithms[0].scoringFunction('Javascript'))
  } else if (arrayPrompt == '1') {
    console.log('algorithm name: ', scoringAlgorithms[1].name);
    console.log('scoringFunction result: ', scoringAlgorithms[1].scoringFunction('Pineapple'));
  } else if (arrayPrompt == '2') {
    console.log('algorithm name: ', scoringAlgorithms[2].name);
    console.log('scoringFunction result: ', scoringAlgorithms[2].scoringFunction('Pokemon'));
  } else console.log('Invalid selection, please try again.');
};

const simplePointStructure = {
  1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

const vowelBonusStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

let simpleScore = function simpleScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = '';
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

let vowelBonusScore = function vowelScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = '';
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelBonusStructure) {
 
		 if (vowelBonusStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

let scrabbleScore = function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

const scoringAlgorithms = [
  { name: "Simple Score",
    description: "Each letter is worth 1 point",
    scoringFunction: simpleScore
  },
  { name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  { name: "Scrabble", 
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
  scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	piescorerPrompt: scorerPrompt
};

