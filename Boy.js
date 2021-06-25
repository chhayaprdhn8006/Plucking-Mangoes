class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("boy.png");
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world,this.body);
        
    }
    fly(){
        this.body.bodyA = null;
    }
    attach(){
        this.body.bodyA = body;
    }

    display(){
       
        imageMode(CENTER);
        image(this.image,200,590,200,300);
        
    }
  
}