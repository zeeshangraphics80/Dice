
        var currentPlayer = '';
        var playerScores = {
            "Player 1": 0,
            "Player 2": 0,
        };

        function toss() {
            var userChoice = prompt("Enter 'Player 1' or 'Player 2' for toss:");
            if (userChoice === "Player 1" || userChoice === "Player 2") {
                return userChoice;
            } else {
                alert("Invalid choice, please enter 'Player 1' or 'Player 2'.");
                return toss(); 
            }
        }

        function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        document.getElementById("tossBtn").onclick = function() {
            currentPlayer = toss();
            document.getElementById("message").textContent = currentPlayer + " won the toss and will start the game.";
            document.getElementById("rollBtn").disabled = false;
            this.disabled = true;
        };

            document.getElementById("rollBtn").onclick = function() {
            var dice1 = rollDice();
            var dice2 = rollDice();
            var totalScore = dice1 + dice2;
            document.getElementById("message").textContent = currentPlayer + " rolled " + dice1 + " and " + dice2 + ". Total: " + totalScore;

            playerScores[currentPlayer] = totalScore;

            document.getElementById("player1Score").textContent = "Player 1 Score: " + playerScores["Player 1"];
            document.getElementById("player2Score").textContent = "Player 2 Score: " + playerScores["Player 2"];

            if (totalScore === 12) {
                document.getElementById("message").textContent = currentPlayer + " wins with a total score of 12!";
                this.disabled = true;
            } else {

                currentPlayer = currentPlayer === "Player 1" ? "Player 2" : "Player 1";
            }
        };
