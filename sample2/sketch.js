function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(188, 214, 235);
  noStroke();
  fill(255, 249, 232);
  rect(0, 38, 600, 54);
  fill(32);
  textSize(28);
  text("김민규", 52, 72);

  fill(70, 95, 150);
  rect(210, 320, 180, 80, 30, 30, 0, 0);
  triangle(300, 310, 240, 400, 360, 400);
  fill(240);
  triangle(292, 318, 308, 318, 300, 370);
  rect(294, 310, 12, 16, 3);

  noStroke();
  fill(236, 200, 168);
  rect(282, 280, 36, 50, 8);
  fill(220, 182, 148, 80);
  ellipse(300, 300, 40, 12);

  fill(240, 206, 172);
  ellipse(232, 210, 22, 36);
  ellipse(368, 210, 22, 36);
  fill(225, 188, 155);
  ellipse(232, 212, 10, 18);
  ellipse(368, 212, 10, 18);

  fill(246, 210, 176);
  ellipse(300, 210, 136, 170);
  fill(232, 194, 162, 60);
  arc(300, 240, 120, 100, 0.3, PI - 0.3);

  fill(235, 180, 170, 45);
  ellipse(254, 240, 28, 14);
  ellipse(346, 240, 28, 14);

  fill(40, 28, 18);
  arc(300, 180, 148, 130, PI, TWO_PI);
  rect(226, 148, 148, 32, 0);
  ellipse(230, 175, 18, 50);
  ellipse(370, 175, 18, 50);
  ellipse(300, 138, 120, 36);
  fill(50, 36, 24);
  arc(300, 150, 130, 40, PI, TWO_PI);

  stroke(50, 34, 22);
  strokeWeight(4);
  arc(272, 190, 36, 12, PI, TWO_PI);
  arc(328, 190, 36, 12, PI, TWO_PI);

  noStroke();
  fill(255);
  ellipse(272, 205, 28, 16);
  ellipse(328, 205, 28, 16);
  fill(50, 35, 22);
  ellipse(272, 206, 13, 13);
  ellipse(328, 206, 13, 13);
  fill(10);
  ellipse(272, 206, 6, 6);
  ellipse(328, 206, 6, 6);
  fill(255, 255, 255, 200);
  ellipse(269, 203, 4, 4);
  ellipse(325, 203, 4, 4);

  noFill();
  stroke(30);
  strokeWeight(3);
  ellipse(272, 205, 40, 30);
  ellipse(328, 205, 40, 30);
  line(292, 205, 308, 205);
  line(252, 200, 234, 194);
  line(348, 200, 366, 194);

  noFill();
  stroke(190, 150, 120);
  strokeWeight(2.5);
  arc(300, 230, 16, 14, 0.3, PI - 0.3);
  noStroke();
  fill(190, 145, 115);
  ellipse(294, 234, 5, 4);
  ellipse(306, 234, 5, 4);

  noStroke();
  fill(195, 125, 115);
  arc(300, 260, 30, 14, 0, PI);
  fill(210, 140, 130);
  arc(300, 260, 30, 6, PI, TWO_PI);
  stroke(180, 115, 105);
  strokeWeight(1.5);
  line(285, 260, 282, 257);
  line(315, 260, 318, 257);
  noStroke();
}
