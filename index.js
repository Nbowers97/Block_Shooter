import Player from "./player.js";
import BulletController from "./BulletController.js";
import Enemy from "./Enemy.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Set canvas dimensions.

canvas.width = 550;
canvas.height = 800;

// Create Player.

const bulletController = new BulletController(canvas);
const player = new Player(
  canvas.width / 2.2,
  canvas.height / 1.3,
  bulletController
);

// Enemies position && details

const enemies = [
  new Enemy(50, 20, "green", 50),
  new Enemy(150, 20, "orange", 50),
  new Enemy(250, 20, "yellow", 50),
  new Enemy(350, 20, "blue", 50),
  new Enemy(450, 20, "grey", 50),
  new Enemy(50, 100, "red", 25),
  new Enemy(150, 100, "purple", 25),
  new Enemy(250, 100, "indigo", 25),
  new Enemy(350, 100, "light blue", 25),
  new Enemy(450, 100, "gold", 25),
  new Enemy(50, 180, "white", 10),
  new Enemy(150, 180, "coral", 10),
  new Enemy(250, 180, "aqua", 10),
  new Enemy(350, 180, "green", 10),
  new Enemy(450, 180, "red", 10),
  new Enemy(50, 260, "gold", 5),
  new Enemy(150, 260, "orange", 5),
  new Enemy(250, 260, "white", 5),
  new Enemy(350, 260, "purple", 5),
  new Enemy(450, 260, "pink", 5),
];

// Create game scene.

function gameLoop() {
  setCommonStyle();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bulletController.draw(ctx);
  player.draw(ctx);
  enemies.forEach((enemy) => {
    if (bulletController.collideWith(enemy)) {
      if (enemy.health <= 0) {
        const index = enemies.indexOf(enemy);
        enemies.splice(index, 1);
      }
    } else {
      enemy.draw(ctx);
    }
  });
}

// Giving player glow.

function setCommonStyle() {
  ctx.shadowColor = "pink";
  ctx.shadowBlur = 25;
  ctx.lineJoin = "bevel";
  ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000 / 60);
