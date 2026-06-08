let bgR = 188, bgG = 214, bgB = 235;
let blinkTimer = 0, mouthOpen = 0, smileAmt = 0, sparkleT = 0;
let shirtR = 70, shirtG = 95, shirtB = 150;
let savedGif = false;

function setup() {
  createCanvas(600, 400);
  textAlign(LEFT);
}

function draw() {
  background(bgR, bgG, bgB);
  noStroke();
  fill(255, 249, 232);
  rect(0, 38, 600, 54);
  fill(32);
  textSize(28);
  text("김민규", 52, 72);

  noStroke();
  fill(shirtR, shirtG, shirtB);
  rect(210, 320, 180, 80, 30, 30, 0, 0);
  triangle(300, 310, 240, 400, 360, 400);
  fill(240);
  triangle(292, 318, 308, 318, 300, 370);
  rect(294, 310, 12, 16, 3);

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
  if (keyIsDown(32)) {
    fill(230, 110, 110, 180);
    ellipse(254, 240, 34, 18);
    ellipse(346, 240, 34, 18);
  }

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
  if (blinkTimer > 0) {
    stroke(40); strokeWeight(3);
    line(258, 205, 286, 205);
    line(314, 205, 342, 205);
    noStroke();
    blinkTimer--;
  } else if (smileAmt > 0.3) {
    stroke(40); strokeWeight(3); noFill();
    arc(272, 210, 30, 18, PI, TWO_PI);
    arc(328, 210, 30, 18, PI, TWO_PI);
    noStroke();
  } else {
    fill(255);
    ellipse(272, 205, 28, 16);
    ellipse(328, 205, 28, 16);
    let gx = constrain((mouseX - 300) * 0.02, -3, 3);
    let gy = constrain((mouseY - 205) * 0.02, -2, 2);
    fill(50, 35, 22);
    ellipse(272 + gx, 206 + gy, 13, 13);
    ellipse(328 + gx, 206 + gy, 13, 13);
    fill(10);
    ellipse(272 + gx, 206 + gy, 6, 6);
    ellipse(328 + gx, 206 + gy, 6, 6);
    fill(255, 255, 255, 200);
    ellipse(269 + gx, 203 + gy, 4, 4);
    ellipse(325 + gx, 203 + gy, 4, 4);
  }

  noFill(); stroke(30); strokeWeight(3);
  ellipse(272, 205, 40, 30);
  ellipse(328, 205, 40, 30);
  line(292, 205, 308, 205);
  line(252, 200, 234, 194);
  line(348, 200, 366, 194);

  noFill(); stroke(190, 150, 120); strokeWeight(2.5);
  arc(300, 230, 16, 14, 0.3, PI - 0.3);
  noStroke();
  fill(190, 145, 115);
  ellipse(294, 234, 5, 4);
  ellipse(306, 234, 5, 4);

  if (keyIsDown(72)) smileAmt = min(smileAmt + 0.08, 1);
  else smileAmt = max(smileAmt - 0.08, 0);
  if (mouseIsPressed) mouthOpen = min(mouthOpen + 1.5, 18);
  else mouthOpen = max(mouthOpen - 1.5, 0);

  noStroke();
  if (smileAmt > 0.05) {
    let w = 40 + smileAmt * 20;
    let h = 16 + smileAmt * 14;
    fill(120, 40, 50);
    arc(300, 260, w, h, 0, PI, CHORD);
    fill(255);
    arc(300, 260, w - 6, h - 6, 0, PI, CHORD);
    stroke(180, 115, 105); strokeWeight(1.2);
    line(300 - (w - 6) / 2, 260, 300 + (w - 6) / 2, 260);
    noStroke();
    fill(235, 150, 150, 120 * smileAmt);
    ellipse(254, 244, 30, 16);
    ellipse(346, 244, 30, 16);
    stroke(180, 115, 105); strokeWeight(2); noFill();
    arc(280, 255, 18, 14, -PI / 2, 0);
    arc(320, 255, 18, 14, PI, -PI / 2);
    noStroke();
  } else if (mouthOpen > 1) {
    fill(120, 40, 50);
    ellipse(300, 262, 34, mouthOpen);
    fill(230, 130, 130);
    arc(300, 262 + mouthOpen * 0.25, 18, mouthOpen * 0.6, 0, PI);
  } else {
    fill(195, 125, 115);
    arc(300, 260, 30, 14, 0, PI);
    fill(210, 140, 130);
    arc(300, 260, 30, 6, PI, TWO_PI);
  }
  stroke(180, 115, 105); strokeWeight(1.5);
  line(285, 260, 282, 257);
  line(315, 260, 318, 257);
  noStroke();

  sparkleT += 0.15;
  for (let i = 0; i < 3; i++) {
    let s = 4 + sin(sparkleT + i) * 2;
    fill(255, 230, 120, 180);
    ellipse(mouseX + cos(sparkleT + i * 2) * 20, mouseY + sin(sparkleT + i * 2) * 20, s, s);
  }
}

function keyPressed() {
  if (key === 'b' || key === 'B') blinkTimer = 12;
  if (keyCode === LEFT_ARROW) { bgR = max(bgR - 20, 0); bgB = min(bgB + 10, 255); }
  if (keyCode === RIGHT_ARROW) { bgR = min(bgR + 20, 255); bgG = max(bgG - 5, 0); }
  if (key === 'c' || key === 'C') {
    shirtR = floor(random(40, 220));
    shirtG = floor(random(40, 220));
    shirtB = floor(random(40, 220));
  }
  if ((key === 's' || key === 'S') && !savedGif) {
    savedGif = true;
    saveGif('20241874_김민규', 5);
  }
}
