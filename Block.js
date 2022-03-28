class Block{
  constructor(x, y, width, height) {
      this.Visiblity = 255
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image= loadImage("block.png")
    }
    display(){
      var pos= this.body.position;
         if(this.body.speed < 3){
          var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
         }
         else{
         push()
         World.remove(world,this.body)
        this.Visiblity -= 5
      tint (255,this.Visiblity)
       image(this.image,this.body.position.x,this.body.position.y,30,40)
       pop()
        }
    }
    
}