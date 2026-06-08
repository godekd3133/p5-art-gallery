// 과제 4: 과제 1 추상화의 애니메이션 버전
// - 원본 도형 구성/위치는 유지 (마이너 수정)
// - 시간에 따른 위치/크기/색상 변화 추가
// - 캔버스 600 x 400 유지

function setup() {
  createCanvas(600, 400);
  // 색상 변화에 활용하기 위해 보조 colorMode를 사용하지 않고
  // 원본과 동일하게 기본 RGB 모드를 유지하되 lerpColor로 보간한다.
}

function draw() {
  // 시간 변수 두 종류
  let f = frameCount;           // 프레임 기반 (빠른 펄스)
  let t = millis() * 0.001;     // 초 단위 (느린 전이)

  // ── 배경: 두 색을 lerpColor로 느리게 왕복 ──
  let bgA = color(12, 10, 22);
  let bgB = color(30, 18, 55);
  background(lerpColor(bgA, bgB, (sin(t * 0.4) + 1) / 2));
  noStroke();

  // 배경 무드 원 두 개 (호흡)
  fill(25, 15, 55, 70);
  ellipse(480, 330, 400 + sin(t) * 20, 400 + sin(t) * 20);
  fill(12, 50, 65, 60);
  ellipse(130, 80, 320 + cos(t * 1.2) * 18, 320 + cos(t * 1.2) * 18);

  fill(50, 12, 25, 40);
  rect(0, 300, 600, 100);

  // ── 큰 삼각형: 좌우로 살짝 흔들림 + 황금색 hue 미세 변화 ──
  let triShift = sin(f * 0.02) * 8;
  let triColor = lerpColor(color(195, 160, 55), color(220, 180, 70),
                           (sin(t * 0.6) + 1) / 2);
  triColor.setAlpha(220);
  fill(triColor);
  triangle(70 + triShift, 340, 220 + triShift, 70, 340 + triShift, 340);

  // ── 녹색 사각형: 크기 펄스 ──
  let rectScale = 1 + sin(f * 0.03) * 0.06;
  fill(135, 32, 48, 225);
  let rw = 220 * rectScale, rh = 160 * rectScale;
  // 원본 rect(330, 45, 220, 160) 의 중심을 고정한 채 스케일
  rect(330 + (220 - rw) / 2, 45 + (160 - rh) / 2, rw, rh);

  // ── 청록 원: 색상 변화 (lerp) + 크기 호흡 ──
  let cyanA = color(25, 140, 150);
  let cyanB = color(60, 200, 210);
  let cyan = lerpColor(cyanA, cyanB, (sin(t * 1.3) + 1) / 2);
  cyan.setAlpha(200);
  fill(cyan);
  let cyanSize = 170 + sin(f * 0.04) * 25;
  ellipse(440, 300, cyanSize, cyanSize);

  // ── 살구색 작은 원: 위아래 부드러운 진동 ──
  fill(180, 125, 95, 130);
  ellipse(140, 180 + sin(t * 1.5) * 14, 95, 95);

  // ── 파란 삼각형: 회전하는 느낌 (꼭짓점 진동) ──
  fill(55, 70, 120, 160);
  let s = sin(f * 0.025) * 10;
  triangle(490 + s, 220 - s, 580 - s, 360 + s, 400 + s, 340);

  // ── 올리브 사각형 ──
  fill(50, 60, 38, 170);
  rect(35, 280, 90, 70);

  // ── 빨간 점 (눈): 크기 빠른 깜빡임 + 흰자 따라움직임 ──
  let redPulse = 40 + sin(f * 0.15) * 8;
  fill(220, 68, 50, 240);
  ellipse(285, 210, redPulse, redPulse);
  fill(255, 245, 235);
  ellipse(285 + cos(t * 2) * 6, 210 + sin(t * 2) * 6, 10, 10);

  // ── 청록 작은 삼각형: 색상 hue 순환 ──
  let triHue = lerpColor(color(55, 205, 200), color(120, 220, 180),
                         (cos(t) + 1) / 2);
  triHue.setAlpha(210);
  fill(triHue);
  triangle(235, 130, 265, 70 + sin(t * 2) * 6, 295, 130);

  // ── 베이지 사각형: 미세 회전 대신 위치 진동 ──
  fill(240, 230, 210, 170);
  rect(380 + cos(f * 0.04) * 4, 225 + sin(f * 0.04) * 4, 42, 42);

  // ── 가이드 선들 ──
  stroke(195, 160, 55, 55);
  strokeWeight(1);
  line(70, 340, 580, 170);
  line(220, 70, 550, 45);

  stroke(220, 215, 205, 30);
  line(300, 5, 300, 395);
  line(5, 200, 595, 200);

  // ── 동심원: 반지름이 천천히 호흡 ──
  noFill();
  stroke(220, 215, 205, 35);
  let ringPulse = sin(t * 0.8) * 12;
  ellipse(300, 200, 260 + ringPulse, 260 + ringPulse);
  ellipse(300, 200, 340 + ringPulse, 340 + ringPulse);

  stroke(195, 160, 55, 25);
  noFill();
  rect(140, 90, 320, 220);

  // ── 장식 점들: 알파만 깜빡임 ──
  noStroke();
  let blink = 150 + sin(f * 0.1) * 80;
  fill(220, 68, 50, blink);
  ellipse(510, 85, 14, 14);
  ellipse(85, 358, 11, 11);

  fill(55, 205, 200, blink * 0.9);
  ellipse(540, 320, 13, 13);
  ellipse(165, 48, 8, 8);

  fill(195, 160, 55, blink * 0.8);
  ellipse(405, 385, 10, 10);

  fill(180, 125, 95, blink * 0.7);
  ellipse(320, 370, 9, 9);
}

// 'g' 키로 6초 GIF 저장
function keyPressed() {
  if (key === 'g' || key === 'G') {
    saveGif('assignment2', 6);
  }
}
