// You will be given a random number at the start of the game.
function poop  () {
    var min = 19;
    var max = 120;
    var randomNumber = Math.floor(Math.random() * ((max - min + 1) + min));
    console.log(randomNumber);
    onload.apply$("#number").text("<h3>" + randomNumber + "</h3 ");
    $("#blueCrystal").click(function () {
        var min = 1;
        var max = 12;
        var crystalValue = Math.floor(Math.random() * ((max - min) + min));
        console.log(crystalValue);
        crystalValue + totalNumber;
    });
    $("#yellowCrystal").click(function () {
        var min = 1;
        var max = 12;
        var crystalValue = Math.floor(Math.random() * ((max - min) + min));
        console.log(crystalValue);
        crystalValue + totalNumber;
    });
    $("#purpleCrystal").click(function () {
        var min = 1;
        var max = 12;
        var crystalValue = Math.floor(Math.random() * ((max - min) + min));
        console.log(crystalValue);
        crystalValue + totalNumber;
    });
    $("#greenCrystal").click(function () {
        var min = 1;
        var max = 12;
        var crystalValue = Math.floor(Math.random() * ((max - min) + min));
        console.log(crystalValue);
        crystalValue + totalNumber;
    });
    // There are four crystals below. By clicking on a crystal you will add a 
    // specific amount of points to your total score
    var totalNumber = 0;
    var wins = 0;
    // You will win the game by matching your total score to the random number,
    if (totalNumber === randomNumber) {
        wins++;
        console.log("You Win!");
    }
    // you lose the game if your total score goes above the random number
    if (totalNumber > randomNumber) {
        loses++;
        console.log("you lose");
    }
    // The value of each crystal is hidden from you until you click on it
    // Each time when the game starts, the game wull change the values of each crystal
}
