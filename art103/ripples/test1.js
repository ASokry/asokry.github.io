var letRain = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  //background(102);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(102);
}

function draw(){
  background(102);
  noStroke();
  //rect(mouseX,mouseY,pmouseX,pmouseY);
  var bright = map(mouseY,0,height,300,50);
  for(var x=0; x<= width; x+=100){
    for(var y=0; y<=width; y+=100){
      fill(random(255),random(255),y*random(255),bright);
      ellipse(x,y,100,100);
    }
  }

  fill(255);
  ellipse(width/2,height/2,300,260);

  fill(0);
  //var followDist = map();
  var eyeX = width/2;
  var eyeY = height/2;

  var limitsX = map(mouseX, 0, width,eyeX-100,eyeX+100);
  var limitsY = map(mouseY,0,height, eyeY-80,eyeY+80);

  fill(128,0,128);
  ellipse(limitsX,limitsY,100,100);

  if(letRain == true){
    for (var i = 0; i <height; i++) {
        //noStroke();
        fill(0,0,255,50);
        ellipse(random(width),i,10,50);
        fill(0,0,100,50);
        ellipse(random(width),i,10,50);
      }
  }
  fill(0,180);
  ellipse(mouseX,mouseY,50,50);
  stroke(0);
  strokeWeight(10);
  line(mouseX,mouseY,pmouseX,pmouseY);

}

function mousePressed(){
  //letRain != letRain;
  if(letRain == false){
    letRain = true;
  }else{
    letRain = false;
  }
  //console.log(letRain);
}
