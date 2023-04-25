const endGame = new EndGame();

const game = new Game(endGame);

endGame.game = game;

document.querySelector("#start-game > button").addEventListener("click", () => {
  document.querySelector("#start-game").style.display = "none";
  game.start();
})
