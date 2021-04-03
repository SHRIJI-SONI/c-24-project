class Dustbin{
    constructor(x,y,width,height){

        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }


    display(){
        var pos=this.body.position;
        var angle =this.body.angle;
        push()      //captures the new setting.
        translate(pos.x,pos.y);       //> to change the 0 of the axis to a given x and y position. 
        rectMode(CENTER)
        fill("white");
        rect(0,0,this.width,this.height)
        pop();  // reverts to the old setting.

    }



}