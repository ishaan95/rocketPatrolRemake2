class Rocket extends Phaser.GameObjects.Sprites {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.movementSpeed = 2;
    }
    update(){
        if (keyLEFT.isDown){
           this.x -= 2; 
        }
        if (keyRIGHT.isDown){
            this.x += 2;
        }
    }
}