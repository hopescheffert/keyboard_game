var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 150 },
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var key_codes;
var game = new Phaser.Game(config);

function preload() {
    this.load.image("pixel", './assets/pixel.png');
    this.load.image("H", '../phaser3-examples/public/assets/input/h.png');
}

function create() {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    key_codes = this.input.keyboard.addKeys(alphabet);
    registerKeyboardEvents(this, key_codes);
    generateScene(this);
}

function generateScene(scene) {
    let background = scene.add.image(0, 0, "pixel");
    background.setOrigin(0);
    background.setDisplaySize(config.width, config.height);
    background.setTint(0x9ca1a8);

    let title = scene.add.text(0, 0, "Type this text");
    title.setFontFamily("Arial");
    title.setFontSize(40);
    title.setPosition(config.width/2 - title.width/2, 100);

    let zone = scene.physics.add.staticImage(0, 0, "pixel");
    zone.setOrigin(0);
    zone.setSize(config.width, 100);
    zone.setDisplaySize(config.width, 100);
    zone.setPosition(0, config.height - zone.getBounds().height);
    zone.setTint(0xff0000);
    
    let letter = scene.physics.add.image(100, 100, "H");
    letter.setDisplaySize(50, 50);

    scene.physics.world.enable([ zone, letter]);
    letter.setCollideWorldBounds(true);
    scene.physics.add.collider(zone, letter);
}

function hitRectangle(rect, letter) {
    rect.setAlpha(0.5);
    letter.setTint(0xff0000);
}

function registerKeyboardEvents(scene, key_codes) {
    for (var k in key_codes) {
        var key = key_codes[k];
        setKeyDownEvent(scene, key);
    }
}

function setKeyDownEvent(scene, key) {
    scene.input.keyboard.on('keydown_' + key.keyCode, function (event) {
        console.log(key.keyCode + " pressed");
    });
}

function update() {

}