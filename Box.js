class Box{
	constructor(x,y,width,height){
		var options ={
			'isStatic':false,
			'restitution': 1,
			'friction':5,
			'density':1.172,
			
		}
		this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
		this.height = height;
		this.Visiblity = 255;
		
		World.add(world,this.body);
	}
    display(){
		console.log(this.body.speed)
		var pos = this.body.position
	    push();
		translate(pos.x,pos.y);
		rectMode(CENTER);
		fill("pink");
		rect(0, 0, this.width, this.height);
		pop();

		if(this.body.speed > 3){
			push()
			this.Visiblity = this.Visiblity-300;
			tint(255,this.Visiblity);
			pop()
		}
	//	imageMode(CENTER)
	//	image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
		//this.width = 0;
		//this.height = 0;
		
		
	}
}