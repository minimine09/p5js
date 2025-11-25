function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  translate(150, 20);
  
  // 목
  
  stroke(0);
  strokeWeight(10);
  point(88, 265)
  
  stroke(0);
  strokeWeight(1);
  fill(230, 190, 160);
  
  beginShape();
  
  vertex(91, 228);
  vertex(92, 251);
  vertex(85, 380);
  vertex(198, 380);
  vertex(198, 259);
  vertex(200, 232);
  
  endShape();
  
  
  
  fill(180, 140, 110);
  beginShape(); // 왼쪽 어께
  
  vertex(90, 270);
  vertex(75, 270);
  vertex(75, 290);
  vertex(90, 290);
  
  endShape();
  
  // 목
  
  noFill();
  stroke(0);
  strokeWeight(1);
  
  // 얼굴
  let startX = 78, startY = 139;
  let endX = 148, endY = 262;
  let control1X = 75, control1Y = 164; 
  let control2X = 79, control2Y = 198;
  let control3X = 91, control3Y = 228;
  let control4X = 113, control4Y = 250;
  let control5X = 135, control5Y = 260;
  
  
  fill(240, 200, 174);
  beginShape();
  // 왼쪽 얼굴
  curveVertex(startX, startY);
  curveVertex(startX, startY);
  
  curveVertex(control1X, control1Y);
  curveVertex(control2X, control2Y);
  curveVertex(control3X, control3Y);
  curveVertex(control4X, control4Y);
  curveVertex(control5X, control5Y);
  
  curveVertex(161, control5Y);
  curveVertex(183, control4Y);
  curveVertex(205, control3Y);
  curveVertex(217, control2Y);
  curveVertex(221, control1Y);
  curveVertex(218, startY);
  
  curveVertex(185, 66);
  curveVertex(80, 62);
  
  curveVertex(startX, startY);
  // 왼쪽 얼굴
  
  endShape();
  
  // 얼굴
  
  
  
  // 머리카락
  
  // 가르마 사이
  fill(35);
  quad(90, 45, 155, 45, 155, 75, 90, 85);
  noFill();
  
  stroke(0);
  strokeWeight(1);
  for(i = 0 ; i < 12 ; i++) {
    curve(95, 85+i*10, 123-i*5, 45+i*3, 123, 80, 123, 80);
    
  }
  
  for(i = 0 ; i < 10 ; i++) {
    curve(145+i*5, 75+i*3, 123+i*5, 45+i*3, 123, 80, 123, 80);
  }
  // 가르마 사이
  
  // 큰 틀
  let bezStX = 123, bezStY = 45;
  let bezAnc1X = 60, bezAnc1Y = 80;
  let bezAnc2X = 160, bezAnc2Y = 100;
  let bezEnX = 78, bezEnY = 139;
  
  noFill();
  
  strokeWeight(1);
  stroke(0);
  
  fill(35);
  beginShape();
  
  vertex(bezStX, bezStY);
  
  bezierVertex(bezAnc1X, bezAnc1Y, bezAnc2X, bezAnc2Y, bezEnX, bezEnY);
  vertex(75, 164);
  vertex(63, 121);
  bezierVertex(bezAnc1X - 5, bezAnc1Y + 20, bezAnc1X + 10, bezAnc1Y - 60, 134, 29);
  
  vertex(123, 45);
  
  endShape(CLOSE);
  
  strokeWeight(1);
  //line(214, 129, 240, 50);
  //line(123, 45, 145, 15);
  
  stroke(0);
  
  beginShape();
  
  vertex(123, 54);
  
  bezierVertex(183, 45, 120, 155, 214, 129);
  vertex(218, 168);
  vertex(229, 122);
  
  bezierVertex(240, 50, 160, 15, 134, 29);
  
  vertex(123, 45);
  vertex(123, 54);
  
  endShape(CLOSE);
  
  // 큰 틀
  
  // 머리카락
  
  // 눈
  
  stroke(0);
  strokeWeight(1);
  fill(255);
  
  beginShape();

  curveVertex(130, 143);
  curveVertex(130, 143); // 오른쪽
  
  curveVertex(123, 138); // 오른쪽 위
  
  curveVertex(115, 137); // 위
  
  curveVertex(106, 139); // 왼쪽 위
  
  curveVertex(101, 145); // 왼
  
  curveVertex(115, 149); // 아래
  
  curveVertex(126, 146); // 오른쪽 아래
  
  curveVertex(130, 143);
  curveVertex(130, 143);
  endShape();
  
  stroke(0);
  strokeWeight(1);
  fill(255);
  
  beginShape();

  curveVertex(167, 145);
  curveVertex(167, 145); // 왼쪽
  
  curveVertex(173, 140); // 왼쪽 위
  
  curveVertex(181, 138); // 위
  
  curveVertex(190, 139); // 오른쪽 위
  
  curveVertex(196, 144); // 오른쪽
  
  curveVertex(181, 149); // 아래
  
  curveVertex(170, 146); // 왼쪽 아래
  
  curveVertex(167, 145);
  curveVertex(167, 145);
  
  endShape();
  
  // 눈동자
  
  noStroke();
  fill(0);
  ellipse(115, 143, 12, 12);
  fill(240);
  ellipse(114, 141, 3, 3);
  ellipse(117, 141, 1, 2);
  
  fill(0);
  ellipse(181, 143, 12, 12);
  fill(240);
  ellipse(180, 141, 3, 3);
  ellipse(183, 141, 1, 2);
    
  // 눈동자

  // 눈
  
  // 코
  
  strokeWeight(2);
  stroke(200, 165, 130);
  noFill();
  
  arc(137, 179, 16, 22, PI-radians(80), PI+radians(55));
  
  arc(159, 179, 16, 22, radians(-55), radians(80));
  // 코 외곽선
  
  
  // 콧구멍
  noStroke();

  let waveWidth = 9;
  let waveHeight = 3;
  let baseY = 185;

  fill(90);

  // 첫 번째 반원 (위로 볼록)
  beginShape();
  vertex(136, baseY); // 시작점
  bezierVertex(
    136 + waveWidth * 0.25, baseY - waveHeight,
    136 + waveWidth * 0.75, baseY - waveHeight,
    136 + waveWidth, baseY
  );
  vertex(136 + waveWidth, baseY); // 끝점 다시 찍기
  vertex(136, baseY); // 시작점으로 되돌아가기
  endShape(CLOSE);

  // 세 번째 반원 (위로 볼록)
  beginShape();
  vertex(136 + waveWidth * 2, baseY);
  bezierVertex(
    136 + waveWidth * 2.25, baseY - waveHeight,
    136 + waveWidth * 2.75, baseY - waveHeight,
    136 + waveWidth * 3, baseY
  );
  vertex(136 + waveWidth * 3, baseY);
  vertex(136 + waveWidth * 2, baseY);
  endShape(CLOSE);

  // 전체 물결 라인만 그리기 (선만 보이도록)
  noFill();
  stroke(50);
  strokeWeight(1);

  beginShape();
  vertex(136, baseY);
  // 위쪽 곡선 1
  bezierVertex(
    136 + waveWidth * 0.25, baseY - waveHeight,
    136 + waveWidth * 0.75, baseY - waveHeight,
    136 + waveWidth, baseY
  );
  // 아래쪽 곡선 2
  bezierVertex(
    136 + waveWidth * 1.25, baseY + waveHeight,
    136 + waveWidth * 1.75, baseY + waveHeight,
    136 + waveWidth * 2, baseY
  );
  // 위쪽 곡선 3
  bezierVertex(
    136 + waveWidth * 2.25, baseY - waveHeight,
    136 + waveWidth * 2.75, baseY - waveHeight,
    136 + waveWidth * 3, baseY
  );
  endShape();
  // 콧구멍
  
  // 코 명암
  
  noStroke();
  fill(220, 185, 150);
  beginShape();
  
  vertex(145, 142);
  
  bezierVertex(143, 154, 143, 167, 129, 174);
  bezierVertex(135, 164, 137, 155, 145, 142);
  
  endShape();
  
  beginShape();
  
  vertex(153, 150);
  
  bezierVertex(152, 154, 153, 167, 166, 175);
  bezierVertex(162, 165, 159, 155, 153, 150);
  
  endShape();
  
  // 코 명암
  
  // 코
  
  // 입
  noStroke();
  fill(221, 133, 129);
  beginShape(); //위 입술
  
  vertex(124, 207);
  
  bezierVertex(133, 206, 142, 200, 148, 205);
  bezierVertex(154, 200, 168, 206, 173, 207);
  
  vertex(173, 207);
  endShape();
  
  
  beginShape(); //아래 입술
  vertex(124, 207);
  
  bezierVertex(140, 218, 157, 218, 173, 207);
  
  vertex(173, 207)
  endShape();
  
  stroke(173, 93, 86);
  strokeWeight(1);
  noFill();
  beginShape(); //중간 선
  vertex(124, 207);
  
  bezierVertex(126, 207, 142, 209, 148, 209);
  bezierVertex(148, 209, 154, 209, 173, 207);
  
  vertex(173, 207);
  endShape();
  
  // 입
  
  // 귀
  
  stroke(0);
  strokeWeight(1);
  fill(240, 200, 174);
  
  beginShape();
  
  vertex(75, 164);
  
  bezierVertex(70, 153, 60, 150, 56, 170);
  bezierVertex(58, 176, 60, 185, 65, 191);
  bezierVertex(70, 192, 69, 196, 75, 199);
  
  vertex(79, 198);
  
  endShape();
  
  beginShape();
  
  vertex(218, 164);
  
  bezierVertex(223, 153, 233, 150, 237, 170);
  bezierVertex(235, 176, 233, 185, 228, 191);
  bezierVertex(223, 192, 224, 196, 218, 199);
  
  vertex(217, 196);
  
  endShape();
  
  // 귀
  
  
  
  
  // 옷
  
  stroke(0);
  strokeWeight(1);
  fill(255);
  
  quad(84, 310, 200, 310, 200, 380, 84, 380); // 몸통셔츠
  
  beginShape() // 왼쪽 카라
  vertex(84, 282);
  
  bezierVertex(98, 298, 128, 309, 142, 310);
  bezierVertex(111, 316, 97, 327, 92, 342);
  
  vertex(84, 282);
  
  
  endShape();
  
  beginShape(); // 오른쪽 카라
  vertex(200, 282);
  
  bezierVertex(186, 298, 156, 309, 142, 310);
  bezierVertex(173, 316, 187, 327, 192, 342);
  
  vertex(200, 282);
  
  endShape();
  
  fill(40, 48, 90);
  beginShape(); // 넥타이 목
  
  vertex(124, 315);
  vertex(132, 327);
  vertex(150, 327);
  vertex(158, 315);
  
  bezierVertex(158, 315, 142, 310, 124, 315);
  
  endShape();
  
  
  beginShape(); // 넥타이
  
  vertex(132, 327);
  vertex(128, 340);
  
  vertex(125, 380);
  vertex(157, 380);
  
  vertex(154, 340);
  vertex(150, 327);
  
  
  endShape();
  
  //////////////////////////////////////
  
  stroke(0);
  strokeWeight(1);
  fill(50, 47, 55);
  
  beginShape(); // 왼쪽 외투 어께
  vertex(58, 280);
  vertex(0, 306);
  
  bezierVertex(-20, 320, -30, 360, -35, 380);
  
  vertex(0,380);
  vertex(60, 380);
  
  vertex(92, 251);
  
  endShape();
  
  beginShape(); // 왼쪽 외투 카라
  vertex(92, 251);
  vertex(58, 280);
  vertex(40, 322);
  vertex(59, 339);
  vertex(36, 352);
  vertex(42, 380);
  
  vertex(97, 380);
  vertex(85, 277);

  bezierVertex(85, 274, 87, 269, 90, 265);
  
  vertex(92, 251);
  
  endShape();
  
  //////////////////////////////////////
  
  stroke(0);
  strokeWeight(1);
  fill(50, 47, 55);
  
  
  beginShape(); // 오른쪽 외투 어께
  vertex(225, 280);
  vertex(285, 306);
  
  bezierVertex(305, 320, 315, 360, 320, 380);
  
  vertex(320,380);
  vertex(220, 380);
  
  vertex(225, 280);
  
  endShape();
  
  
  beginShape(); // 오른쪽 외투 카라
  vertex(198, 257);
  vertex(225, 280);
  vertex(243, 323);
  vertex(225, 340);
  vertex(251, 352);
  vertex(244, 380);
  
  vertex(186, 380);
  vertex(190, 324);

  bezierVertex(196, 309, 198, 299, 197, 287);
  
  vertex(198, 257);
  
  endShape();
  
  
  // 옷
  
  
  
}