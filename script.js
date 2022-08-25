const character = document.getElementById("character");
const block = document.getElementById("block");
const reStart = document.getElementById("restart");
const game = document.getElementById("game");
const jump = () => {
  if (character.classList.contains("animate")) return;
  character.classList.add("animate");
  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
};
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    jump();
  }
});
const checkDead = () => {
  const interval = setInterval(() => {
    const characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    const blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > 0 && characterTop > 130) {
      // block.style.animation = "none";
      // block.style.display = "none";
      alert("You lose!");
      clearInterval(interval);
      reStart.classList.remove("hidden");
    }
  }, 10);
};
// restart
const restartGame = () => {
  console.log("restart!");
  reStart.classList.add("hidden");
  checkDead();
};
reStart.addEventListener("click", restartGame);
