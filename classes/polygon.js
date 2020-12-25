class polygon
{
    constructor(x,y,radius)
    {
        var options = {
            
            restitution: 0.4,
            friction: 1.0,
            density: 10
            
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
        this.image = loadImage("polygon.png")
    }

    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.radius * 2 + 20, this.radius * 2 + 20);
    }

}