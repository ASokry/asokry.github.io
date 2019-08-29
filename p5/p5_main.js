// var canvas;
// var ctx;
//var leftImg;
var rightImg;
var des;

function setup() {
  // canvas = document.getElementById('leftCanvas');
  // ctx = canvas.getContext('2d');
  //console.log(canvas);

  //Connects html elements by id
  //leftImg = document.getElementById('bannerImage1');
  rightImg = document.getElementById('bannerImage2');

  //Set Hover functions
  select('#game3').mouseOver(imgTo_powerUp);
  select('#mashup').mouseOver(imgTo_mashup);
  select('#pokeHell').mouseOver(imgTo_pokeHell);

  //Connects html elements by class name
  des = document.getElementsByClassName('description');
}

function draw() {
  // ctx.fillStyle = 'rgb(0)';
  // ctx.fillRect(0,0,100,100);
}

function imgTo_atw() {
  // img = new Image();
  // img.onload = function() {
  //   ctx.drawImage(img,0,0,img.width*0.9,canvas.height);
  // }
  // img.src = 'img/mashupOG.jpg';

  //Change Image
  //leftImg.src = "img/game0.png";
  rightImg.src = "img/game0.png";

  //Change text
  //note: using array format to address two tags
  //that share the class name
  des[0].innerHTML = "Against the Wall (2016), Video Game, 1.98MB";
  //des[1].innerHTML = "Against the Wall (2016), Video Game, 1.98MB";
}

function imgTo_powerUp() {
  //leftImg.src = "img/game3.png";
  rightImg.src = "img/game3.png";
  des[0].innerHTML = "Power Ups (2017), Video Game, 2.17MB";
  //des[1].innerHTML = "Power Ups (2017), Video Game, 2.17MB";
}

function imgTo_mashup() {
  //leftImg.src = "img/mashupOG.jpg";
  rightImg.src = "img/mashupOG.jpg";
  des[0].innerHTML = "Mashup (2016), Mashup Art, 800 x 800px";
  //des[1].innerHTML = "Mashup (2016), Mashup Art, 800 x 800px";
}

function imgTo_pokeHell() {
  //leftImg.src = "img/pokeHellOG.jpg";
  rightImg.src = "img/pokeHellOG.jpg";
  des[0].innerHTML = "Pokemon Hell (2016), Photoshop Art, 1196 x 800px";
  //des[1].innerHTML = "Pokemon Hell (2016), Photoshop Art, 1196 x 800px";
}
