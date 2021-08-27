var counter = 0;

function setup() {
  createCanvas(800, 800);
  frameRate(20);
}

function draw() {
  counter ++;

  if (counter == 10000)
    noLoop();

  var r = Math.random();
  if (r < 0.25)
  {
    fill(200, 0, 0, 60);
    stroke(200, 0, 0, 25);
    strokeWeight(10);
  }
  else if (r < 0.5){
    fill(0, 200, 0, 60);
    stroke(0, 200, 0, 25);
    noStroke();
  }
  else if (r < 0.75){
    fill(200, 200, 0, 60);
    stroke(200, 200, 0, 25);
    strokeWeight(10);
  }
  else{
    fill(0, 0, 200, 60);
    stroke(0, 0, 200, 25);
    strokeWeight(10);
  }



  bezier(rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd());

}

function rnd(){
  return 800 * Math.random();
}
