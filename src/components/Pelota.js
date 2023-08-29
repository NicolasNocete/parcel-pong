// clase pelota, extend from circle

import Phaser from "phaser";

export default class Pelota extends Phaser.GameObjects.Arc {
  velocidad;

  constructor(scene, x, y, r, color, velocidad) {
    super(scene, x, y, r, 0, 360, false, color);
    this.velocidad = velocidad;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setBounce(1, 1);
    this.body.setCollideWorldBounds(true);
    this.body.setVelocity(this.velocidad, this.velocidad);
  }

  cambiarColor() {
    this.fillColor = `0x${  Math.random().toString(16).slice(2, 8)}`;
  }
}
