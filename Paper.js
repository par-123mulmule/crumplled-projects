class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
     this.image=loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("blue");
      image(this.image,pos.x, pos.y, 50,50);
      
    }
  }