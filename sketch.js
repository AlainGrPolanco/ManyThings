var pingpong = [];
var pingpong2 = []

var r = 255;
var g = 50;
var b = 75;
var c;

function setup() {
  createCanvas(800, 800);
  c = color(0, 150, 150);
  for (var i = 0; i < 100; i++) {
    pingpong[i] = new Ball(random(width), random(height), 50, random(this.xpos, this.ypos));
  }
  for (var j = 0; j < 100; j++) {
    pingpong2[j] = new Ball2(random(width), random(height), 50, random(this.xpos2, this.ypos2));
  }
}

function draw() {
  background(250, 100, 120);
  stroke(r)


  for (var i = 0; i < pingpong.length; i++) {
    pingpong[i].render();
    pingpong[i].move();
  }


  for (var j = 0; j < pingpong.length; j++) {
    pingpong2[j].render();
    pingpong2[j].move();
  }

  fill(150, 170, 150);
  rect(700, 0, 100, 800);

  fill(150, 170, 150);
  rect(0, 0, 100, 800);

  fill(r, g, b);
  rect(300, 0, 200, 800);

  fill(g);
  ellipse(401, 400, 190, 190);

  fill(r);
  ellipse(401, 400, 100, 100);

  fill(r);
  ellipse(401, 100, 120, 120);

  fill(r);
  ellipse(401, 700, 120, 120);

}


function Ball(x, y, sz, sp) {
  this.xpos = x;
  this.ypos = y;
  this.size = sz;
  this.speed = sp

  this.render = function() {
    fill(c);
    ellipse(this.xpos, this.ypos, this.size, this.size);

    this.move = function() {
      this.ypos = this.ypos - this.speed;
    }
    if (this.ypos > 800 || this.ypos < 0) {
      this.ypos = this.ypos + this.speed;
    }
  }
}

function Ball2(x, y, sz, sp) {
  this.xpos2 = x;
  this.ypos2 = y;
  this.size2 = sz;
  this.speed2 = sp

  this.render = function() {
    fill(c);
    ellipse(this.xpos2, this.ypos2, this.size2, this.size2);

    this.move = function() {
      this.ypos2 = this.ypos2 + this.speed2;
    }
    if (this.ypos2 > 800 || this.ypos2 < 0) {
      this.ypos2 = this.ypos2 - this.speed2;
    }
  }
}


function mousePressed() {
  c = color(random(0), random(150), random(150));
}