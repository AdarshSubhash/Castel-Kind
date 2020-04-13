class Stick {
    constructor(x, y,width,height) {
      var stick_options ={
        isStatic: true
    }
     
      this.body = Bodies.rectangle(x, y, width, height,stick_options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
     
      push();
      rectMode(CENTER);
      fill(234,177,87);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop(); 
    }
  };
  