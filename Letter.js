function Letter(character) {
    this.character = character;
    this.isGuessed = false;
    this.getCharacter = function () {
        if (this.isGuessed === true) {
            return this.character;
        }

        return "_";

    };


    this.getActualCharacter = function(){
        return this.character;
    };

    this.guess = function (characterGuess) {
        // console.log(characterGuess);
        // console.log(this.character);

        if (characterGuess === this.character) {
            this.isGuessed = true;
            return this.isGuessed;
        }

        return false;

    };
};

module.exports = Letter;

