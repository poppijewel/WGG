var wins = document.getElementById("wins"); ;
var losses = document.getElementById("losses");
var userGuess = document.getElementById("userGuess");
var guesses = 10;
var wordsIndex = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["blackpink", "lalisa", "genesis", "china", "yolanda", "tempe", "justice", "highrise"];

   
    //I want to create a game where the player guesses a word. They have so many guesses to guess the word and 
    //If they guess the correct letter it will show on the screen and if not the guesses will go down.
    //I need the words to be displayed on the screen somewhere
    //I need a place for the user to guess the letters and if they appear in the word i want them to appear on the screen
    //Also if they're not in the present word I still want the letter to disappear.
    //I need to display the alphabet as well. To show the availability of the letters.
  
  

    function renderWord(){
        if(wordsIndex <= words.length -1){
            document.querySelector("#words").innerHTML = words[wordsIndex];
        }
        else{
            document.querySelector("#words").innerHTML = "Game Over!";
            document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + words.length;
        }
    }
  
    function updateScore(){
        document.querySelector("#score").innerHTML = "Score: " + score;
    }

    function updateGuesses(){
        document.querySelector("#guessesLeft").innerHTML = "GuessesLeft: " + guesses;
    }
    updateGuesses()