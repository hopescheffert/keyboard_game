export class GameScene extends Phaser.Scene {
  private gameWidth: number = 800;
  private gameHeight: number = 600;

  constructor() {
    super({
      key: "GameScene"
    });
  }

  preload(): void {
    this.load.image("pixel", "./assets/games/keyboard/pixel.png");
  }

  create(): void {
    let background = this.add.image(0, 0, "pixel");
    background.setOrigin(0);
    background.setDisplaySize(this.gameWidth, this.gameHeight);
    background.setTint(0x9ca1a8);

    let title = this.add.text(0, 0, "Type this text.");
    title.setFontFamily("Arial");
    title.setFontSize(40);
    title.setPosition(this.gameWidth / 2 - title.width / 2, 100);

    let zone = this.physics.add.staticImage(0, 0, "pixel");
    zone.setOrigin(0);
    zone.setSize(this.gameWidth, 100);
    zone.setDisplaySize(this.gameWidth, 100);
    zone.setPosition(0, this.gameHeight - 2 * zone.getCenter().y);
    zone.setTint(0xff0000);

    let letter = this.physics.add.image(100, 100, "pixel");
    letter.setDisplaySize(50, 50);

    this.physics.world.enable([zone, letter]);

    letter.setCollideWorldBounds(1);
  }

  update(): void {

  }
}
