

var wins = 0;
var losses = 0;

var targetNumber = 0;
var yourScore = 0;

var crystalVals = [];
var crystalVal;

var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;



$(document).ready(function() { 

        // Generate random target number on page load and print to target
        function startGame() {

         yourScore = 0;      

        // Generate Random Number for Target Number
        targetNumber = Math.floor(Math.random() * 100) + 25 ;
            
            targetNumber = parseInt(targetNumber);
            console.log(targetNumber);

            // Print to Target Placeholder
            $("#target-number").text(targetNumber);
            
            // Print to Score Placeholder
            $("#your-score").text(yourScore);
            

            // Each crystal gets a random value 

                for (var i = 1; i < 5; i++) {
                    crystalVal = [Math.floor(Math.random() * 10) + 1] ;
                    console.log("crystalVal = " + crystalVal);

                    // Push random CrystalVal into Crystal Vals array
                    crystalVals.push(crystalVal);
                    console.log("crystalVals = " + crystalVals);

                }


                        // When Clicking Crystal One Assign Value of CrysalVals[0]
                        $(".crystal1").on("click", function() {
                            
                            crystalOne = parseInt(crystalVals[0]);
                            yourScore += crystalOne;
                            console.log("yourScore = " + yourScore);
                            $("#your-score").text(yourScore);
                            winLoss();

                        });

                        $(".crystal2").on("click", function() {
                            
                            crystalTwo = parseInt(crystalVals[1]);
                            yourScore += crystalTwo;
                            console.log("yourScore = " + yourScore);
                            $("#your-score").text(yourScore);
                            winLoss();
                        });

                        $(".crystal3").on("click", function() {
                            
                            crystalThree = parseInt(crystalVals[2]);
                            yourScore += crystalThree;
                            console.log("yourScore = " + yourScore);
                            $("#your-score").text(yourScore);
                            winLoss();

                        });

                        $(".crystal4").on("click", function() {
                            
                            crystalFour = parseInt(crystalVals[3]);
                            yourScore += crystalFour;
                            console.log("yourScore = " + yourScore);
                            $("#your-score").text(yourScore);
                            winLoss();

                        });


                        function winLoss() {
                        if (yourScore === targetNumber) {
                            wins++
                            $("#win-ct").text(wins);
                            startGame();
                        }

                        if (yourScore > targetNumber) {
                            losses++
                            $("#loss-ct").text(losses);
                            startGame();

                        }  
                        }  


         } //. Start Game Function 



    startGame();

}); //. Document Ready






    
    











// Each time a crystal is clicked it add that value to the score


// Player must match the score to the target number


// If score is under target continue game


// If score equals target add 1 to wins and reset score to 0 and generate new target number and new crystal values


// If score exceeds target add 1 to losses and reset score to 0 and generate new target number and new crystal values