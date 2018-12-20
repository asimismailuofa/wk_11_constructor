var Letter = require("./Letter");

function Word(word) {
    var letterArray = word.split("");
    this.letters = [];
    for (var i = 0; i < letterArray.length; i++) {
        this.letters.push(new Letter(letterArray[i]));
    }

    this.guessLetter = function (character) {
        var letterFound = false;

        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guess(character) === true) {
                letterFound = true;
            }
        }

        return letterFound;
    };

    this.guessWord = function () {
        return this.letters.every(
            function (letter) {
                return letter.isGuessed;
            }
        );
    };

    this.result = function () {

        var resultWord = "";

        for (var i = 0; i < this.letters.length; i++) {
            resultWord = resultWord + this.letters[i].getActualCharacter();

        }

        return resultWord;
    }
};

module.exports = Word;