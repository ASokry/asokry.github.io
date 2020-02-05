let notes = [ 60, 62, 64, 65, 67, 69, 71]; //chosen notes

let osc; //varible of SinOsc()
let theNote = 0;  //marks the current note
var circles = []; //array to hold circles

let particles = []; //array to hold particles

let resume = false;

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
  // A triangle oscillator
  osc = new p5.SinOsc();
  // Start silent
  osc.start();
  osc.amp(0);
  //background(0);
}

function windowResized(){
  //resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(0);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we set a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw(){
  background(0);
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

  //pushes one particle per frame
  for (var i = 0; i < 1; i++) {
    particles.push(new Particle());
  }

  //updates and displays particles
  for (var i = particles.length-1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    //if particle completely faded delete particle
    if (particles[i].a <= 0) {
      particles.splice(i,1);
    }
  }
}

//new circle on each mousePressed
function touchStarted() {
  //for google chrome policy
  if(resume == false){
    osc.start();
    resume = true;
  }
  //push a new circle to our array
  circles.push(new Circle(mouseX, mouseY, random(7, 15)));

  //plays the current note on each press
  playNote(notes[theNote]);
  //console.log(theNote);
}

function touchMoved() {
  //push a new circle to our array
  circles.push(new Circle(mouseX, mouseY, random(7, 15)));

  //plays the current note on each press
  playNote(notes[theNote]);
  //console.log(theNote);
}

function touchEnded() {
  //fades current note on each release
  osc.fade(0,0.5);

  //changes current note on each release
  if(theNote < notes.length){
    theNote++;
  }else{
    //resets notes if current note goes out of array
    theNote = 0;
  }
  //console.log(theNote);
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

class Particle {
  constructor() {
    this.x = random(0,width); //x position
    this.y = random(0,height);  //y position
    this.size = random(20,40);  //size

    // this.r = random(146,197); //red value
    // this.g = random(186,226);  //green value
    // this.b = random(210,247); //blue value
    this.r = random(255); //red value
    this.g = random(255);  //green value
    this.b = random(255); //blue value
    this.a = random(150,200); //alpha value
  }

  show(){
    //rectMode(CENTER);
    //noStroke();
    //fill(0,255,0,this.a);
    //rect(this.x,this.y,20,20);
    noStroke();
    fill(this.r,this.g,this.b,this.a);
    ellipse(this.x,this.y,this.size,this.size);
    //stroke(255,this.a);
    //strokeWeight(5);
    //line(this.x,this.y,this.x,this.y+20);
  }

  //fades particles
  update(){
    this.a -= 1.5;
  }
}
