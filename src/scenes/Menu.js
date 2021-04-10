class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }
    preload(){
        this.load.audio('audio', './assets/rocket_shot.wav');
    }

    create(){
        this.add.text(20,20,"RocketPatrolMenu");
        this.scene.start("playScene");
    }
}