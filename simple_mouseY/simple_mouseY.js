function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("#6d6875");
  noStroke("#6d6875");
  fill("#b5838d");
  rect(50, 50, 300, 300);
  fill("#e9c46a");
  //ellipse(200, 200, 50, 50);
  ellipse(mouseX, 200, 50, 50);
  fill("#2a9d8f");
  ellipse(200, mouseY, 50, 50);

}
