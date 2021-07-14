class PlayerArcher{
    constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.body = Bodies.rectangle(x,y,w,h);
    this.image = loadImage("assets/playerArcher.png");
    World.add(world,this.body);
    Matter.Body.setAngle(this.body,-PI/2);
    }
    display() {
        var pos = this.body.position;
        var angle  =  this.body.angle;
        if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
          angle += 0.01;
          Matter.Body.setAngle(this.body,angle);
        }
    
        if (keyIsDown(UP_ARROW) && angle > -1.9) {
          angle -= 0.01;
          Matter.Body.setAngle(this.body,angle);
        }
    
        fill("#676e6a");
        push();
        translate(this.x, this.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,10,10);
        pop();
        
      }
}