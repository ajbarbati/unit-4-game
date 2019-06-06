// You will be given a random number at the start of the game.

$(document).ready(function crystalGame() {
        var randomNumber = Math.floor(Math.random() * ((120 - 19 + 1) + 19));
        console.log(randomNumber);
    
        $("#number").text("Number: " + randomNumber)

        // There are four crystals below. By clicking on a crystal you will add a 
        // specific amount of points to your total score
        var totalNumber = 0
        var wins = 0
        var losses = 0

        function winLoss () {
                if (totalNumber === randomNumber) {
                        wins++ 
                        $("#wins").text("Wins: " + wins)
                        newGame()     
                }
                if (totalNumber > randomNumber) {
                        losses++
                        $("#losses").text("Losses: " + losses)
                        newGame()
                }
        }

        function newGame () {
                randomNumber =Math.floor(Math.random() * ((120 - 19 + 1) + 19))
                $("#number").text("Number: " + randomNumber)
                totalNumber = 0
                $("#totalscore").text("Your total score is: " + totalNumber)
        }

        $("#blueCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
        $("#yellowCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
        $("#purpleCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
        $("#greenCrystal").click( function () {
             var crystalValue = Math.floor(Math.random() * ((12 - 1) + 1))
              
             totalNumber = crystalValue + totalNumber 
             console.log(totalNumber)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
    
        // You will win the game by matching your total score to the random number,


   
   
})






// you lose the game if your total score goes above the random number

// The value of each crystal is hidden from you until you click on it

// Each time when the game starts, the game wull change the values of each crystal
