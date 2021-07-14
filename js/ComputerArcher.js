class ComputerArcher{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
          };
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.image = loadImage("assets/computerArcher.png");
    World.add(world,this.body);
    Matter.Body.setAngle(this.body,-PI/2);
    }
    display() {
        var pos = this.body.position;
        var angle  =  this.body.angle;
        
        fill("#676e6a");
        push();
        translate(this.x, this.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
        
      }
}