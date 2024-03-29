class Stone{
    constructor(x, y, width, height){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }

    
        
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,60);
        
    }
  
}