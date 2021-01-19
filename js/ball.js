class Ball{
    constructor(x,y,radius){
        var options ={
            //restitution:1,
            isStatic:false
        }
    
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    this.radius=radius;
    this.image=loadImage("images/stone.png")

    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("magenta");
        //stroke("green");
        strokeWeight(5);
        imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
}    