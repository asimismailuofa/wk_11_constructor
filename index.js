var inquirer = require("inquirer");
var Word = require("./Word");

var numberOfGuesses = 10;
var words = [
    "spiderman",
    "titanic",
    "superman",
    "batman"
];


var randomWord = words[Math.floor(Math.random() * words.length)];

// console.log(randomWord);

var guessWord = new Word(randomWord);

function startGame() {
    askLetter().then(function () {

        if (numberOfGuesses < 1) {
            console.log("There are no more guesses left");
            console.log("The solution is " + guessWord.result());

            process.exit(0);
        }
        else if (guessWord.guessWord() === true) {
            console.log("You guessed correctly");
            numberOfGuesses = 10;

            process.exit(0);

        }
        else {
            startGame();
        }

    });
};

function askLetter() {
    return inquirer.prompt(
        [

            {
                type: "input",
                name: "choice",
                message: "enter a letter"

            }
        ]
    ).then(function (value) {

        var guessSucess = guessWord.guessLetter(value.choice);
        if (guessSucess === true) {
            console.log("correct guess");
        }
        else {
            console.log("incorrect guess");

            numberOfGuesses--;
            console.log("Number of guesses left " + numberOfGuesses);
        }
    });

};


startGame();


