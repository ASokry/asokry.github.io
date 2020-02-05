var circles = []; //array to hold circles

let particles = []; //array to hold particles

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  cnv.parent('sketch-holder');
  background(0);
}

function windowResized(){
  //resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(0);
}

function draw(){
  //background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text("Tap the Screen",(width/2),50);
  //update and display circles everytime draw loops
  for(var i= 0; i<circles.length; i++){
    circles[i].update();
    circles[i].ellipse();

    console.log(circles.length);

    //if circle has completely faded, then delete it
    if(circles[i].a <= 0){
      //remove 1 circle at i?
      //console.log("work");
      circles.splice(i, 1);
    }
  }
}

//new circle on each mousePressed
function touchStarted() {
  //push a new circle to our array
  circles.push(new Circle(mouseX, mouseY, random(7, 15)));
}

function touchMoved() {
  //push a new circle to our array
  circles.push(new Circle(mouseX, mouseY, random(7, 15)));
}

//class for making circles
function Circle(x, y, s){
  //set properties
  this.x = x; 	//x position
  this.y = y;		//y position
  this.s = s;		//circle size

  this.r = random(255); //red value
  this.g = random(255);  //green value
  this.b = random(255); //blue value
  this.a = 200; //alpha value

  //define methods

  //draws the ellipse
  this.ellipse = function(){
    //define visual propoerties of the ellipse
    stroke(this.r, this.g, this.b,this.a);
    strokeWeight(3);
    noFill();

    //draw the ellipse
    ellipse(this.x, this.y, this.s);
  }

  //makes it grow and fade
  this.update = function(){
    this.s += 3;
    this.a -= 1.5;
  }
}
