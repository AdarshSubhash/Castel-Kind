class Stone {
    constructor(x, y,width,height) {
      var stone_options ={
        isStatic: true
    }
     
      this.body = Bodies.rectangle(x, y, width, height,stone_options);
      this.width = width;
      this.height = height;
    World.add(world, this.body);
    }
    display(){
      push();
     rectMode(CENTER);
      fill("brown");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop(); 
    }
  };
  