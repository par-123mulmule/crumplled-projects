class  Dustbin{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.leftbody = Bodies.rectangle(x-100,y-17, 20,200, options);
        this.rightbody = Bodies.rectangle(x+100, y-17, 20,200, options);
        this.bottombody = Bodies.rectangle(x, y, 200, 20, options);
        this.x = x;
        this.y = y;

        this.image=loadImage("sprites/dustbingreen.png");
        
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        World.add(world, this.bottombody);

      
      }
      display(){
        fill("yellow");
        imageMode(CENTER);
        /*rect( this.x-100,this.y-17,20,200);
        rect( this.x+100,this.y-17,20,200);
        rect( this.x,this.y,200,20);*/
        image(this.image,this.x,this.y,200,200);
      }
}