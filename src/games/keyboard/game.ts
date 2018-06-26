/// <reference path="../../phaser.d.ts"/>
import "phaser";
import { GameScene } from "./scenes/gameScene";

const config: GameConfig = {
  title: "Keyboard Game",
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: [GameScene],
  input: {
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 150 },
    }
  },
  backgroundColor: "#8abbc1",
  pixelArt: true,
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new Game(config);
};
