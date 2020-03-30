class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
	this.smokeimage=loadImage("sprites/smoke.png");
	this.tragictory=[]
  }

  display() {
	  if(this.body.velocity.x>10&&this.body.position.x>200){
	  var position=[this.body.position.x,this.body.position.y];
	  this.tragictory.push(position)
	  }
	  for(var i = 0; i<this.tragictory.length; i++){
	     image(this.smokeimage,this.tragictory[i][0],this.tragictory[i][1])
	  
	     }
		  
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
