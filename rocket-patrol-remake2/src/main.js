console.log("hello from main.js here")

let config = {
    type : Phaser.CANVAS,
    width : 640,
    height : 480,
    scene : [Menu, Play]
}
let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;
let keyLEFT, keyRIGHT, keyL, keyR;

var game = new Phaser.Game(config)


