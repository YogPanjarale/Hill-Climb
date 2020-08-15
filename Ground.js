class Ground{
    constructor(l){
        this.lenght=l
        this.arr =[]
        this.height=height/2
        this.noiseScale= 0.05
        this.xScale =random(7,12.5)
        this.yScale =random(3.5,4);
        this.arr.push({x:0,y:height})
        this.arr.push({x:0,y:this.height})
       // vertex(0,height)
       // vertex(0,this.height)
        for (let x=0; x < width; x++) {
            let noiseScale=this.noiseScale;
            let noiseVal = noise((2+x)*noiseScale, 250*noiseScale);
           // stroke(noiseVal*255);
           // line(x, this.height+noiseVal*80, x, height);
            var v1= {x:x*this.xScale,y : this.height+noiseVal*80 * this.yScale}
            this.arr.push(v1)
            // var v2= createVector(x,height)
           // this.arr.push(v2)
          } 
          this.arr.push({x:this.arr[this.arr.length-1].x,y: this.arr[this.arr.length-1].y})
          this.arr.push({x:this.arr[this.arr.length-1].x,y:height}) 
          var options = {
            isStatic: true,
            debug:true
           }
        //this.body=Bodies.fromVertices(0,0,this.arr, options)
         //example
         var vertices = [{x: 0, y: 0}, {x: 50, y:25}, {x: 100, y: 0}, {x: 50, y: 50}]
         vertices = this.arr
         this.Bodies = Bodies.fromVertices(100, 100, Matter.Vertices.create(vertices), {
            isStatic: true,
            render: {
                fillStyle: '#f54e42',
                strokeStyle: '#556270',
                strokeWeight : 3}}, false);
                 Matter.Vertices.create(vertices,this.Bodies)
                World.add(world,[this.Bodies])
    }
    display(){
        push()
        fill(255,200,200)
        stroke(255)
       // scale(this.xScale,this.yScale)
        beginShape();
        // vertex(0,height)
        // vertex(0,this.height)
       this.arr.forEach(e => {
            vertex(e.x, e.y);
        });
        // vertex(this.arr[this.arr.length-1].x,this.arr[this.arr.length-1].y)
        // vertex(this.arr[this.arr.length-1].x,height) 
        endShape(CLOSE);
        pop()
    }
}