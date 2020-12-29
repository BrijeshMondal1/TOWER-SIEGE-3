class SlingShot{
    constructor(bodyA, xposition, yposition){
        var options = {
            bodyA: bodyA,
            pointB: {x: xposition, y: yposition},
            stiffness: 0.2,
            length: 1
        }
        
        this.body = Constraint.create(options);
        World.add(world, this.body);

    }

    fly(){
        
        this.body.bodyA = null;

    }

    attach(bodyA){
        
        this.body.bodyA = bodyA;

    }

    display(){
        
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.body.pointB;

            stroke(107, 239, 136);
            strokeWeight(7);
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }

    }
    
}