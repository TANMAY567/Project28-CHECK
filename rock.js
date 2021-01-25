class Rock{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("images/stone.png");
      this.height=height;
      this.width=width;

      World.add(world,this.body)
    }
    display(){
        var posX = this.body.position.x ;
        var posY = this.body.position.y;

        push();
        translate(posX,posY);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this,height);
        pop();
    }
}