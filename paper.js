class Paper{
    constructor(x,y,r){


        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
        World.add(world,this.body)
    }


    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()      //captures the new setting.
        translate(pos.x,pos.y);       //> to change the 0 of the axis to a given x and y position. 
        rotate(angle);
        ellipseMode(CENTER)
        fill("brown");
        ellipse(0,0,this.r,this.r)
        pop();  // reverts to the old setting.

    }



}