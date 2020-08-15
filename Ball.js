class Ball {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          density:1.0,
          restitution:0.5,
          friction:1.6,
          stiffness:0.04
    }
      this.body = Bodies.circle(x,y,r,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      
        
      imageMode(CENTER);
     
      image(this.image,this.body.position.x,this.body.position.y,60,60);
    }
  };
