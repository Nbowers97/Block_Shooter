export default class Bullet {
  // Possible bullet colors

  colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "lightblue",
  ];

  // Bullet Stats

  constructor(x, y, speed, damage) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;

    this.width = 4;
    this.height = 20;
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    this.y -= this.speed;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // If bullet colliding with enemies

  collideWith(sprite) {
    if (
      this.x < sprite.x + sprite.width &&
      this.x + this.width > sprite.x &&
      this.y < sprite.y + sprite.height &&
      this.y + this.height > sprite.y
    ) {
      sprite.takeDamage(this.damage);
      return true;
    }
    return false;
  }
}
