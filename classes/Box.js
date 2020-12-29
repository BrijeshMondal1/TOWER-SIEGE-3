class Box{

    constructor(x,y){

       var options = {
        
            restitution: 0,
            friction: 2.0,
            density: 2

       }

       this.body = Bodies.rectangle(x, y , 40, 40, options);
       World.add(world, this.body);
       this.visibility = 255;

    }

    display(color){

       if(this.body.speed < 7){

        var pos = this.body.position;

        push();
        fill(color);
        rectMode(CENTER);
        rect(pos.x,pos.y,40,40);
        pop();

       }else{

        World.remove(world, this.body);

        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        pop();

       }
    }

    update(){

      if(this.visibility < 0 && this.visibility > - 1001){

         score++;

      }

    }

}