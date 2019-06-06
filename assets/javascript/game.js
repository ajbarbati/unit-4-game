// You will be given a random number at the start of the game.

$(document).ready(function crystalGame() {
        newGame()
        var randomNumber
        console.log(randomNumber);
    
        $("#number").text("Number: " + randomNumber)

        // There are four crystals below. By clicking on a crystal you will add a 
        // specific amount of points to your total score
        var totalNumber = 0
        var wins = 0
        var losses = 0
        var blueValue 
        var yellowValue
        var purpleValue
        var greenValue

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
                randomNumber = Math.floor(Math.random() * ((120 - 19 + 1) + 19)) 
                $("#number").text("Number: " + randomNumber)
                totalNumber = 0
                $("#totalscore").text("Your total score is: " + totalNumber)
                newValues()
        }
        
        function newValues () {
                blueValue = Math.floor(Math.random() * ((12 - 1 + 1) + 1))
                yellowValue = Math.floor(Math.random() * ((12 - 1 + 1) + 1))
                purpleValue = Math.floor(Math.random() * ((12 - 1 + 1) + 1))
                greenValue = Math.floor(Math.random() * ((12 - 1 + 1) + 1))         
        }

        $("#blueCrystal").click( function () {
             totalNumber = blueValue + totalNumber 
             console.log(blueValue)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
        $("#yellowCrystal").click( function () {
             totalNumber = yellowValue + totalNumber 
             console.log(yellowValue)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
        $("#purpleCrystal").click( function () {
             totalNumber = purpleValue + totalNumber 
             console.log(purpleValue)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
        $("#greenCrystal").click( function () {
             totalNumber = greenValue + totalNumber 
             console.log(greenValue)
             $("#totalscore").text("Your total score is: " + totalNumber)
             winLoss()
        })
    
        // You will win the game by matching your total score to the random number,


   
   
})






// you lose the game if your total score goes above the random number

// The value of each crystal is hidden from you until you click on it

// Each time when the game starts, the game wull change the values of each crystal
