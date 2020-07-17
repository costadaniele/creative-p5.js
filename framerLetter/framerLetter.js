function setup() {
  createCanvas(400, 400);
  background("#6d6875");
}

function draw() {
  
  stroke("#6d6875");
  fill("#f7ede2");
  rect(50, 50, 300, 300);
  fill("#e9c46a");
  //ellipse(200, 200, 50, 50);
  ellipse(mouseY, mouseX, 50, 50);
  fill("#2a9d8f");
  ellipse(mouseX, mouseY, 50, 50);

}
