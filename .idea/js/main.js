setInterval(() =>{
  const game = document.querySelector("#game");


  const egg = new Image();
  egg.addEventListener("load", () => {
    egg.classList.add("egg");
    const x = Math.round(Math.random() * (120 - (5 * egg.width / egg.height)));
    egg.style.left = x + "vh";
    game.appendChild(egg)
  });

  egg.src = "images/egg-69303_1280.jpg"
},1000);

setInterval(() => {
  document.querySelectorAll("#game > .egg").forEach(element => {
    const top = element.style.top.length !== 0 ? parseFloat(element.style.top) : 0;
    console.log(element.style.top);
    element.style.top = (top + 0.03) + "vh";

    if (top > 100) {
      element.remove();

      const heart = document.querySelector(".heart");
      heart.remove();
      if (!document.querySelector("heart")) {
        alert("Game Over!");
        window.location.reload();
      }
    }
  })
}, 30 / 1000);

