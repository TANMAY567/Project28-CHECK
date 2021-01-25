class Ellastic{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: boy.body,
            pointB: stoneObject.body,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = stoneObject.body;
        this.cons = Constraint.create(options);
        World.add(world, this.cons);
    }
    fly(){
       this.cons.bodyA = null;
    }

    display(){
            
          if(this.cons.bodyA){

            
            var pointA = this.cons.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    
    }
}