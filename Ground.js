class Ground {
    constructor(x,y,width,height){
this.ground= createSprite(x,y,width,height);
this.image= loadImage ("pictures/ground1.png")
    }

    display(){
        this.ground.addImage(this.image);
        this.ground.scale=0.5;
    player.collide(this.ground);

    //this.ground.debug=true;
    this.ground.setCollider("rectangle",50,0,400,100);

    if(gameState===3){
        this.ground.destroy();
    }
    }

    
        

}