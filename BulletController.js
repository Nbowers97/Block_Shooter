import Bullet from "./Bullet.js";
export default class bulletController {
  // Bullet Tracking

  bullets = [];
  timeTillNextBullet = 0;
  constructor(canvas) {
    this.canvas = canvas;
  }

  // Shooting Delay

  shoot(x, y, speed, damage, delay) {
    if (this.timeTillNextBullet <= 0) {
      this.bullets.push(new Bullet(x, y, speed, damage));
      this.timeTillNextBullet = delay;
    }

    this.timeTillNextBullet--;
  }

  // Apply and remove bullets

  draw(ctx) {
    this.bullets.forEach((bullet) => {
      if (this.isBulletOffScreen(bullet)) {
        const index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1);
      }
      bullet.draw(ctx);
    });
  }

  collideWith(sprite) {
    return this.bullets.some((bullet) => {
      if (bullet.collideWith(sprite)) {
        this.bullets.splice(this.bullets.indexOf(bullet), 1);
        return true;
      }
      return false;
    });
  }

  isBulletOffScreen(bullet) {
    return bullet.y <= -bullet.height;
  }
}
