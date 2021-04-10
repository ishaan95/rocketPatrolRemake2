class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }
    create(){
        this.add.text(20,20,"RocketPatrolMenu");
        this.scene.start("playScene");
    }
}