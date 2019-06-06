// You will be given a random number at the start of the game.

$(document).ready(function crystalGame() {
        var randomNumber = Math.floor(Math.random() * ((120 - 19 + 1) + 19));
        console.log(randomNumber);
    
        $("#number").text("Number: " + randomNumber)

        // There are four crystals below. By clicking on a crystal you will add a 
        // specific amount of points to your total score
        var totalNumber = 0

        $("#blueCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
        })
        $("#yellowCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
        })
        $("#purpleCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
        })
        $("#greenCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
        })
    
   
   
})





// You will win the game by matching your total score to the random number,

// you lose the game if your total score goes above the random number

// The value of each crystal is hidden from you until you click on it

// Each time when the game starts, the game wull change the values of each crystal
