class Mango {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true,
          restitution:0.3,
          friction:4.0,
          density:3.0
      }
      this.body = Bodies.rectangle(x, y, width, height ,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body); 
      this.image = loadImage("mango.png");
    }
    display(){
      var pos =this.body.position;
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,50,50); 
      
    }
  };