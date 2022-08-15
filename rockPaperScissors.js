        // Your JavaScript goes here!
        //Create a variable "computerSelection" to be the computer's selection
        var computerSelection = "";
        //Create a variable "playerSelection" to be the player's selection
        var playerSelection = "";
        //Generate a random computer's choice and fill the variable "computerSelection" with it
        function getComputerChoice(){
           var choicesArray = ["rock","paper","scissors"];
           var randomNumber = Math.floor(Math.random()*choicesArray.length);
           return   computerSelection = choicesArray[randomNumber];
        };