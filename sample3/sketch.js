let lEyeAlpha, rEyeAlpha;
let lEyeWink, rEyeWink;


// 인터렉션 변수
let kimmin;
let ballNum;
let recNum;
let recSize;

let hairChangeMode;
let hairColor;

let carMode;
let carTransX;
let carTransY;

function setup() {
  createCanvas(600, 400);
  lEyeAlpha = 255; 
  rEyeAlpha = 255;
  lEyeWink = 0; 
  rEyeWink = 0;
  
  // 인터렉션 변수
  kimmin = 0;
  ballNum = 1;
  recNum = 1;
  recSize = 10;
  
  hairChangeMode = 0;
  hairColor = color(35, 35, 35);
  
  carMode = 0;
  carTransX = 0;
  carTransY = 0;
}

function draw() {
  background(220);
  translate(carTransX, carTransY);
  
  // 목
  stroke(0);
  strokeWeight(10);
  point(238, 265)
  
  stroke(0);
  strokeWeight(1);
  fill(230, 190, 160);
  
  beginShape();
  
  vertex(241, 228);
  vertex(242, 251);
  vertex(235, 380);
  vertex(348, 380);
  vertex(348, 259);
  vertex(350, 232);
  
  endShape();
  
  
  
  fill(180, 140, 110);
  beginShape(); // 왼쪽 어께
  
  vertex(240, 270);
  vertex(225, 270);
  vertex(225, 290);
  vertex(240, 290);
  
  endShape();
  
  // 목 위치 완
  
  noFill();
  stroke(0);
  strokeWeight(1);
  
  // 얼굴
  let startX = 228, startY = 139;
  let endX = 298, endY = 262;
  let control1X = 225, control1Y = 164; 
  let control2X = 229, control2Y = 198;
  let control3X = 241, control3Y = 228;
  let control4X = 263, control4Y = 250;
  let control5X = 285, control5Y = 260;
  
  
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
  
  curveVertex(311, control5Y);
  curveVertex(333, control4Y);
  curveVertex(355, control3Y);
  curveVertex(367, control2Y);
  curveVertex(371, control1Y);
  curveVertex(368, startY);
  
  curveVertex(335, 66);
  curveVertex(230, 62);
  
  curveVertex(startX, startY);
  // 왼쪽 얼굴
  
  endShape();
  
  // 얼굴 위치 
  
  // 눈썹
  
  strokeWeight(1);
  stroke(1);
  
  for(i=0; i<15; i++) {
    line(250 + i*2, 112+i/5, 255 + i*2, 120);
  }
  
  // 눈썹
  
  
  
  
  
  // 머리카락
  
  // 인터렉션
  if (hairChangeMode === 1) {
    stroke(0);
    strokeWeight(2);

    line(180, 50, 200, 60);
    line(200, 60, 190, 65);
    line(200, 60, 195, 47);
    
    if (frameCount%8 === 0) 
      hairColor = color(random(0,255), random(0,255), random(0,255));
    
  } else hairColor = color(35, 35, 35);
  
  
  
  // 인터렉션
  
  
  // 가르마 사이
  fill(hairColor);
  quad(240, 45, 305, 45, 305, 75, 240, 85);
  noFill();
  
  stroke(0);
  strokeWeight(1);
  for(i = 0 ; i < 12 ; i++) {
    curve(245, 85+i*10, 273-i*5, 45+i*3, 273, 80, 273, 80);
    
  }
  
  for(i = 0 ; i < 10 ; i++) {
    curve(295+i*5, 75+i*3, 273+i*5, 45+i*3, 273, 80, 273, 80);
  }
  // 가르마 사이
  
  // 큰 틀
  let bezStX = 273, bezStY = 45;
  let bezAnc1X = 210, bezAnc1Y = 80;
  let bezAnc2X = 310, bezAnc2Y = 100;
  let bezEnX = 228, bezEnY = 139;
  
  noFill();
  
  strokeWeight(1);
  stroke(0);
  
  fill(hairColor);
  beginShape();
  
  vertex(bezStX, bezStY);
  
  bezierVertex(bezAnc1X, bezAnc1Y, bezAnc2X, bezAnc2Y, bezEnX, bezEnY);
  vertex(225, 164);
  vertex(213, 121);
  bezierVertex(bezAnc1X - 5, bezAnc1Y + 20, bezAnc1X + 10, bezAnc1Y - 60, 284, 29);
  
  vertex(273, 45);
  
  endShape(CLOSE);
  
  strokeWeight(1);
  //line(214, 129, 240, 50);
  //line(123, 45, 145, 15);
  
  stroke(0);
  
  beginShape();
  
  vertex(273, 54);
  
  bezierVertex(333, 45, 270, 155, 364, 129);
  vertex(368, 168);
  vertex(379, 122);
  
  bezierVertex(390, 50, 310, 15, 284, 29);
  
  vertex(273, 45);
  vertex(273, 54);
  
  endShape(CLOSE);
  
  // 큰 틀
  
  // 머리카락 위치 완
  
  /// 인터렉션 - 기존 눈이 사라지게 + 윙크 보이게
  
  if(keyIsPressed && key === 'R') {
    rEyeAlpha = 0;
    rEyeWink = 255;
  } else {
    rEyeAlpha = 255;
    rEyeWink = 0;
  }
  if(keyIsPressed && key === 'L') {
    lEyeAlpha = 0;
    lEyeWink = 255;
  } else {
    lEyeAlpha = 255;
    lEyeWink = 0;
  }
  if(keyIsPressed && key === 'B') {
    rEyeAlpha = 0;
    lEyeAlpha = 0;
    rEyeWink = 255;
    lEyeWink = 255;
  } else if(key === 'R' || key === 'L') {
            
  } else {
    rEyeAlpha = 255;
    lEyeAlpha = 255;
    rEyeWink = 0;
    lEyeWink = 0;
  }
  
  /// 인터렉션 - 기존 눈이 사라지게 + 윙크 보이게
  
  
  /// 인터렉션 - 윙크
  
  // 눈
  
  stroke(0, lEyeAlpha);
  strokeWeight(1);
  fill(255, lEyeAlpha);
  
  beginShape();

  curveVertex(280, 143);
  curveVertex(280, 143); // 오른쪽
  
  curveVertex(273, 138); // 오른쪽 위
  
  curveVertex(265, 137); // 위
  
  curveVertex(256, 139); // 왼쪽 위
  
  curveVertex(251, 145); // 왼
  
  curveVertex(265, 149); // 아래
  
  curveVertex(276, 146); // 오른쪽 아래
  
  curveVertex(280, 143);
  curveVertex(280, 143);
  endShape();
  
  stroke(0, rEyeAlpha);
  strokeWeight(1);
  fill(255, rEyeAlpha);
  
  beginShape();

  curveVertex(317, 145);
  curveVertex(317, 145); // 왼쪽
  
  curveVertex(323, 140); // 왼쪽 위
  
  curveVertex(331, 138); // 위
  
  curveVertex(340, 139); // 오른쪽 위
  
  curveVertex(346, 144); // 오른쪽
  
  curveVertex(331, 149); // 아래
  
  curveVertex(320, 146); // 왼쪽 아래
  
  curveVertex(317, 145);
  curveVertex(317, 145);
  
  endShape();
  
  // 눈동자
  
  noStroke();
  fill(0, lEyeAlpha);
  ellipse(265, 143, 12, 12);
  fill(240, lEyeAlpha);
  ellipse(264, 141, 3, 3);
  ellipse(267, 141, 1, 2);
  
  fill(0, rEyeAlpha);
  ellipse(331, 143, 12, 12);
  fill(240, rEyeAlpha);
  ellipse(330, 141, 3, 3);
  ellipse(333, 141, 1, 2);
    
  // 눈동자

  // 눈 위치 완
  
  /// 인터렉션 - 윙크
  stroke(0, lEyeWink);
  strokeWeight(2);
  line(250, 135, 280, 143);
  line(250, 150, 280, 143);
  
  stroke(0, rEyeWink);
  strokeWeight(2);
  line(346, 135, 317, 145);
  line(346, 150, 317, 145);
  
  
  
  
  // 코
  
  strokeWeight(2);
  stroke(200, 165, 130);
  noFill();
  
  arc(287, 179, 16, 22, PI-radians(80), PI+radians(55));
  
  arc(309, 179, 16, 22, radians(-55), radians(80));
  // 코 외곽선
  
  
  // 콧구멍
  noStroke();

  let waveWidth = 9;
  let waveHeight = 3;
  let baseY = 185;

  fill(90);

  // 첫 번째 반원 (위로 볼록)
  beginShape();
  vertex(286, baseY); // 시작점
  bezierVertex(
    286 + waveWidth * 0.25, baseY - waveHeight,
    286 + waveWidth * 0.75, baseY - waveHeight,
    286 + waveWidth, baseY
  );
  vertex(286 + waveWidth, baseY); // 끝점 다시 찍기
  vertex(286, baseY); // 시작점으로 되돌아가기
  endShape(CLOSE);

  // 세 번째 반원 (위로 볼록)
  beginShape();
  vertex(286 + waveWidth * 2, baseY);
  bezierVertex(
    286 + waveWidth * 2.25, baseY - waveHeight,
    286 + waveWidth * 2.75, baseY - waveHeight,
    286 + waveWidth * 3, baseY
  );
  vertex(286 + waveWidth * 3, baseY);
  vertex(286 + waveWidth * 2, baseY);
  endShape(CLOSE);

  // 전체 물결 라인만 그리기 (선만 보이도록)
  noFill();
  stroke(50);
  strokeWeight(1);

  beginShape();
  vertex(286, baseY);
  // 위쪽 곡선 1
  bezierVertex(
    286 + waveWidth * 0.25, baseY - waveHeight,
    286 + waveWidth * 0.75, baseY - waveHeight,
    286 + waveWidth, baseY
  );
  // 아래쪽 곡선 2
  bezierVertex(
    286 + waveWidth * 1.25, baseY + waveHeight,
    286 + waveWidth * 1.75, baseY + waveHeight,
    286 + waveWidth * 2, baseY
  );
  // 위쪽 곡선 3
  bezierVertex(
    286 + waveWidth * 2.25, baseY - waveHeight,
    286 + waveWidth * 2.75, baseY - waveHeight,
    286 + waveWidth * 3, baseY
  );
  endShape();
  // 콧구멍
  
  // 코 명암
  
  noStroke();
  fill(220, 185, 150);
  beginShape();
  
  vertex(295, 142);
  
  bezierVertex(293, 154, 293, 167, 279, 174);
  bezierVertex(285, 164, 287, 155, 295, 142);
  
  endShape();
  
  beginShape();
  
  vertex(303, 150);
  
  bezierVertex(302, 154, 303, 167, 316, 175);
  bezierVertex(312, 165, 309, 155, 303, 150);
  
  endShape();
  
  // 코 명암
  
  // 코 위치 완
  
  // 입
  noStroke();
  fill(221, 133, 129);
  beginShape(); //위 입술
  
  vertex(274, 207);
  
  bezierVertex(283, 206, 292, 200, 298, 205);
  bezierVertex(304, 200, 318, 206, 323, 207);
  
  vertex(323, 207);
  endShape();
  
  
  beginShape(); //아래 입술
  vertex(274, 207);
  
  bezierVertex(290, 218, 307, 218, 323, 207);
  
  vertex(323, 207)
  endShape();
  
  stroke(173, 93, 86);
  strokeWeight(1);
  noFill();
  beginShape(); //중간 선
  vertex(274, 207);
  
  bezierVertex(276, 207, 292, 209, 298, 209);
  bezierVertex(298, 209, 304, 209, 323, 207);
  
  vertex(323, 207);
  endShape();
  
  // 입
  
  // 귀
  
  stroke(0);
  strokeWeight(1);
  fill(240, 200, 174);
  
  beginShape();
  
  vertex(225, 164);
  
  bezierVertex(220, 153, 210, 150, 206, 170);
  bezierVertex(208, 176, 210, 185, 215, 191);
  bezierVertex(220, 192, 219, 196, 225, 199);
  
  vertex(229, 198);
  
  endShape();
  
  beginShape();
  
  vertex(368, 164);
  
  bezierVertex(373, 153, 383, 150, 387, 170);
  bezierVertex(385, 176, 383, 185, 378, 191);
  bezierVertex(373, 192, 374, 196, 368, 199);
  
  vertex(367, 196);
  
  endShape();
  
  noFill(); // 내부 채우기 없앰
  strokeWeight(3); // 외곽선 두께 3으로 설정
  stroke(230, 170, 130);  // 사람 귀 색깔 (피부 톤 비슷한 색)
  
  beginShape();
  
  vertex(224, 167);
  
  bezierVertex(221, 158, 213, 156, 210, 172);
  bezierVertex(212, 176, 213, 185, 218, 188);
  bezierVertex(221, 189, 221, 192, 226, 195);
  
  vertex(228, 194);
  
  endShape();



  
  
  
  // 귀 위치 완
  
  
  
  
  // 옷
  
  stroke(0);
  strokeWeight(1);
  fill(255);
  
  quad(234, 310, 350, 310, 350, 380, 234, 380); // 몸통셔츠
  
  beginShape() // 왼쪽 카라
  vertex(234, 282);
  
  bezierVertex(248, 298, 278, 309, 292, 310);
  bezierVertex(261, 316, 247, 327, 242, 342);
  
  vertex(234, 282);
  
  
  endShape();
  
  beginShape(); // 오른쪽 카라
  vertex(350, 282);
  
  bezierVertex(336, 298, 306, 309, 292, 310);
  bezierVertex(323, 316, 337, 327, 342, 342);
  
  vertex(350, 282);
  
  endShape();
  
  fill(40, 48, 90);
  beginShape(); // 넥타이 목
  
  vertex(274, 315);
  vertex(282, 327);
  vertex(300, 327);
  vertex(308, 315);
  
  bezierVertex(308, 315, 292, 310, 274, 315);
  
  endShape();
  
  
  beginShape(); // 넥타이
  
  vertex(282, 327);
  vertex(278, 340);
  
  vertex(275, 380);
  vertex(307, 380);
  
  vertex(304, 340);
  vertex(300, 327);
  
  
  endShape();
  
  
  //////////////////////////////////////
  
  stroke(0);
  strokeWeight(1);
  fill(50, 47, 55);
  
  beginShape(); // 왼쪽 외투 어께
  vertex(208, 280);
  vertex(150, 306);
  
  bezierVertex(130, 320, 120, 360, 115, 380);
  
  vertex(150,380);
  vertex(210, 380);
  
  vertex(242, 251);
  
  endShape();
  
  beginShape(); // 왼쪽 외투 카라
  vertex(242, 251);
  vertex(208, 280);
  vertex(190, 322);
  vertex(209, 339);
  vertex(186, 352);
  vertex(192, 380);
  
  vertex(247, 380);
  vertex(235, 277);

  bezierVertex(235, 274, 237, 269, 240, 265);
  
  vertex(242, 251);
  
  endShape();
  
  //////////////////////////////////////
  
  stroke(0);
  strokeWeight(1);
  fill(50, 47, 55);
  
  
  beginShape(); // 오른쪽 외투 어께
  vertex(375, 280);
  vertex(435, 306);
  
  bezierVertex(455, 320, 465, 360, 470, 380);
  
  vertex(470,380);
  vertex(370, 380);
  
  vertex(375, 280);
  
  endShape();
  
  
  beginShape(); // 오른쪽 외투 카라
  vertex(348, 257);
  vertex(375, 280);
  vertex(393, 323);
  vertex(375, 340);
  vertex(401, 352);
  vertex(394, 380);
  
  vertex(336, 380);
  vertex(340, 324);

  bezierVertex(346, 309, 348, 299, 347, 287);
  
  vertex(348, 257);
  
  endShape();
  
  
  // 옷
  
  // 인터렉션
  
  // HAPPY
  if(kimmin === 1) {
    ballNum = 1;
    recNum = 1;

    noStroke();
    for(i = 0; i*recSize+310 < 400; i++) {
      recNum = 1;
      for(j = 0; j*recSize < 600; j++) {
        if(i%2 === 1) {
          if(recNum%2 === 1) {
            fill(75);
            rect(j*recSize, (i*10)+310, recSize, recSize);
          } else {
            fill(0);
            rect(j*recSize, (i*10)+310, recSize, recSize);
          }

        } else if(i%2 === 0) {
          if(recNum%2 === 1) {
            fill(0);
            rect(j*recSize, (i*10)+310, recSize, recSize);
          } else {
            fill(75);
            rect(j*recSize, (i*10)+310, recSize, recSize);
          }
        }
        recNum++;
      }
    }

    noStroke();
    for(i = 0; i < 30; i++) {
      if(ballNum%2 === 1) {
        fill(255, 0, 0);

        ellipse(((ballNum-1)*20)+10, 310, 20, 20);
        ellipse(((ballNum)*20)+10, 400, 20, 20);
      } else {
        fill (255, 255, 0);

        ellipse(((ballNum-1)*20)+10, 310, 20, 20);
        ellipse(((ballNum-2)*20)+10, 400, 20, 20);
      }
      ballNum++;
    }

    /// kimmin
    fill(255, 255, 0);

    rect(80, 320, recSize, recSize);
    rect(80, 340, recSize, recSize);
    rect(80, 360, recSize, recSize);
    rect(80, 380, recSize, recSize);
    rect(90, 330, recSize, recSize);
    rect(90, 350, recSize, recSize);
    rect(90, 370, recSize, recSize);
    rect(100, 340, recSize, recSize);
    rect(100, 360, recSize, recSize);
    rect(110, 330, recSize, recSize);
    rect(110, 370, recSize, recSize);
    rect(120, 320, recSize, recSize);
    rect(120, 380, recSize, recSize);

    rect(160, 320, recSize, recSize);
    rect(160, 340, recSize, recSize);
    rect(160, 360, recSize, recSize);
    rect(160, 380, recSize, recSize);
    rect(170, 330, recSize, recSize);
    rect(170, 350, recSize, recSize);
    rect(170, 370, recSize, recSize);

    rect(200, 320, recSize, recSize);
    rect(200, 340, recSize, recSize);
    rect(200, 360, recSize, recSize);
    rect(200, 380, recSize, recSize);
    rect(210, 330, recSize, recSize);
    rect(210, 350, recSize, recSize);
    rect(210, 370, recSize, recSize);
    rect(220, 340, recSize, recSize);
    rect(230, 350, recSize, recSize);
    rect(240, 340, recSize, recSize);
    rect(250, 330, recSize, recSize);
    rect(250, 350, recSize, recSize);
    rect(250, 370, recSize, recSize);
    rect(260, 320, recSize, recSize);
    rect(260, 340, recSize, recSize);
    rect(260, 360, recSize, recSize);
    rect(260, 380, recSize, recSize);

    rect(300, 320, recSize, recSize);
    rect(300, 340, recSize, recSize);
    rect(300, 360, recSize, recSize);
    rect(300, 380, recSize, recSize);
    rect(310, 330, recSize, recSize);
    rect(310, 350, recSize, recSize);
    rect(310, 370, recSize, recSize);
    rect(320, 340, recSize, recSize);
    rect(330, 350, recSize, recSize);
    rect(340, 340, recSize, recSize);
    rect(350, 330, recSize, recSize);
    rect(350, 350, recSize, recSize);
    rect(350, 370, recSize, recSize);
    rect(360, 320, recSize, recSize);
    rect(360, 340, recSize, recSize);
    rect(360, 360, recSize, recSize);
    rect(360, 380, recSize, recSize);

    rect(400, 320, recSize, recSize);
    rect(400, 340, recSize, recSize);
    rect(400, 360, recSize, recSize);
    rect(400, 380, recSize, recSize);
    rect(410, 330, recSize, recSize);
    rect(410, 350, recSize, recSize);
    rect(410, 370, recSize, recSize);

    rect(440, 320, recSize, recSize);
    rect(440, 340, recSize, recSize);
    rect(440, 360, recSize, recSize);
    rect(440, 380, recSize, recSize);
    rect(450, 330, recSize, recSize);
    rect(450, 350, recSize, recSize);
    rect(450, 370, recSize, recSize);
    rect(460, 340, recSize, recSize);
    rect(470, 350, recSize, recSize);
    rect(480, 360, recSize, recSize);
    rect(490, 370, recSize, recSize);
    rect(490, 350, recSize, recSize);
    rect(490, 330, recSize, recSize);
    rect(500, 380, recSize, recSize);
    rect(500, 360, recSize, recSize);
    rect(500, 340, recSize, recSize);
    rect(500, 320, recSize, recSize);
    /// kimmin
  }
  
  
  
  // HAPPY
  
  // 자동차
  
  if(carMode === 1) {
    noStroke();
    fill(150, 150, 220);
    rect(100, 300, 400, 40);

    fill(130, 130, 200);
    rect(100, 340, 400, 70);

    fill(100);
    rect(100, 410, 400, 15);

    fill(50);
    rect(120, 425, 60, 15);
    rect(420, 425, 60, 15);

    fill(255, 255, 150);
    rect(120, 360, 60, 20);
    rect(420, 360, 60, 20);

    fill(225);
    rect(240, 370, 120, 30);

    fill(130, 130, 200);
    rect(60, 295, 40, 30);
    rect(500, 295, 40, 30);
    
    if(keyIsPressed) {
      if(keyCode === UP_ARROW) carTransY -= 2;
      if(keyCode === DOWN_ARROW) carTransY += 2;
      if(keyCode === LEFT_ARROW) carTransX -= 2;
      if(keyCode === RIGHT_ARROW) carTransX += 2
    }
    
  } else {
    carTransX = 0;
    carTransY = 0;
  }
  
  // 자동차
  
  
  // 인터렉션
    
 
}

function keyPressed() {
  if(key === 'K') {
    if(kimmin === 0) kimmin = 1;
    else kimmin = 0;
  }
  
  if(key === 'H') {
    if(hairChangeMode === 0) hairChangeMode = 1;
    else hairChangeMode = 0;
  }
  
  if(key === 'C') {
    if(carMode === 0) carMode = 1;
    else carMode = 0;
  }
  
  // 저장
  if (key === 's') {
    saveGif('mySketch', 10);
  }
  
}

