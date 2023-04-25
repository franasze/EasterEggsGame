class Game {
  constructor(endGame) {
    this.endGame = endGame;
  }

  start() {

    const game = document.getElementById("game");
    game.style.display = "block";

    this.resetHearts();

    document.querySelectorAll("#game > .egg").forEach(egg => {
      egg.remove();
    });
    document.querySelector(".basket").style.left = "60vh";

    this.eggCreator = setInterval(() => {
      const game = document.querySelector("#game");

      const egg = new Image();
      egg.addEventListener("load", () => {
        egg.classList.add("egg");
        const x = Math.round(Math.random() * (120 - (5 * egg.width / egg.height)));
        egg.style.left = x + "vh";
        game.appendChild(egg);
      });

      egg.src = "images/egg-69303_1280.jpg"
    }, 1000);

    this.eggTick = setInterval(() => {
      document.querySelectorAll("#game > .egg").forEach(egg => {
        egg.style.top = this.updatePosition(egg.style.top, 0.3);

        if (parseFloat(egg.style.top) > 87 && parseFloat(egg.style.top) <= 100) {
          const basket = document.querySelector(".basket");
          const basketX = parseFloat(basket.style.left);
          const eggX = parseFloat(egg.style.left);
          const eggWidth = (5 * egg.width / egg.height);

          if (eggX + eggWidth > basketX - 10 && eggX < basketX + 10) {
            egg.remove();
            const score = document.getElementById("score");
            score.innerText = parseInt(score.innerText) + 1 + "";
          }
        } else if (parseFloat(egg.style.top) > 100) {
          egg.remove();

          const heart = document.querySelector(".heart");
          heart.remove();
          if (!document.querySelector(".heart")) {
            this.stop();
            this.endGame.show(document.getElementById("score").innerText)
          }
        }
      })
    }, 30 / 1000);

    document.body.addEventListener("keydown", event => this.onKeyDown(event));
  }

  resetHearts() {
    const life = document.querySelector("#life");
    life.innerHTML = "";
    for (let i = 0; i < 3; ++i) {
      const heart = new Image();
      heart.classList.add("heart")
      heart.src = "images/heart-157895_1280.png";
      life.appendChild(heart);
    }
  }


  onKeyDown(event) {
    const basket = document.querySelector(".basket");
    switch (event.key) {
      case"ArrowLeft":
        basket.style.left = this.updatePosition(basket.style.left, -5);
        break;
      case "ArrowRight":
        basket.style.left = this.updatePosition(basket.style.left, 5);
        break;
    }
    if (parseFloat(basket.style.left) < 10) {
      basket.style.left = "10vh";
    }

    if (parseFloat(basket.style.left) > 110) {
      basket.style.left = "110vh";
    }
  }

  updatePosition(position, delta) {
    const top = position.length !== 0 ? parseFloat(position) : 0;
    return (top + delta) + "vh";
  }


  stop() {
    clearInterval(this.eggCreator);
    clearInterval(this.eggTick);
    document.body.removeEventListener("keydown", this.onKeyDown);
    const game = document.getElementById("game");
    game.style.display = "none";
  }
}
