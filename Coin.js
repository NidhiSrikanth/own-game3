class Coin{
    constructor(x,y,width,height){
        this.coin= createSprite(x,y,10,10);

        this.coin.addAnimation("coinAnimation",coinImage);

        this.coin.scale= 0.5;
    }

    display(){
     if(player.isTouching(this.coin))  {
         this.coin.destroy();
         score= score+2;
     }
    }
}