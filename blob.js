class Blob {
    constructor(x, y,w=random(10, 50)) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':0.1,
          "debug":true
      }
      this.body = Bodies.circle(x, y,w/2, options);
      this.width = width;
      this.height = height;
      this.w = w
 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      
      fill(200,200,0);
      ellipse(0, 0, this.w)
      pop();
    }
  };
  var Blobs = []
  function createBlob(x,y){
    var a= new Blob(x,y)
    Blobs.push(a)
    return a;
  }
  function drawBlobs(){
    Blobs.forEach(element => {
      element.display();
    });
  }