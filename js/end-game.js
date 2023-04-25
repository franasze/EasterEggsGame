class EndGame {

  constructor() {
  }

  show(finalScore) {
    const endGame = document.getElementById("end-game");
    endGame.style.display = "block";

    document.getElementById("final-score").innerText = finalScore;

    document.querySelector("#end-game > button").addEventListener("click", () => this.playAgain());
  }

  playAgain() {
    const endGame = document.getElementById("end-game");
    endGame.style.display = "none";

    this.game.start();
  }
}
