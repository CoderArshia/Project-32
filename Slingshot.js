class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 10
        }
        
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(10);
            stroke("white");
           // if(pointA.x<220){
               strokeWeight(10);
               line(pointA.x, pointA.y, pointB.x, pointB.y);
                
             /*  line(pointA.x-20,pointA.y,pointB.x+15,pointB.y);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                //line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);*/
            }
        }
    }
    
