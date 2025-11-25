let cirTime;
let midCirSize;

let orbitAngleA = 0;
let orbitRadiusA = 1;
let centerXA, centerYA;

let orbitAngleB = 0;
let orbitRadiusB = 1;
let centerXB, centerYB;

let ranColorB1;
let ranColorB2;
let ranColorB3;
let ranColorB4;

let ranColorR1;
let ranColorR2;
let ranColorR3;
let ranColorR4;

let time;

function setup() {
  createCanvas(600, 400);
  frameRate(10);
  
  midCirSize = 10;
  
  centerXA = 110;
  centerYA = 90;
  
  centerXB = 550;
  centerYB = 300;
  
  ranColorB1 = color(random(255), random(255), random(255));
  ranColorB2 = color(random(255), random(255), random(255));
  ranColorB3 = color(random(255), random(255), random(255));
  ranColorB4 = color(random(255), random(255), random(255));
  
  ranColorR1 = color(random(255), random(255), random(255));
  ranColorR2 = color(random(255), random(255), random(255));
  ranColorR3 = color(random(255), random(255), random(255));
  ranColorR4 = color(random(255), random(255), random(255));
  
}

function draw() {
  background(220, 250, 255);
  cirTime = frameCount*6;
  time = frameCount*6;
  
  console.log(time);
  console.log(time%5 > 2);
  
  if(time%2.5 === 1) {
    ranColorB1 = color(random(15), random(150), 255);
    ranColorB2 = color(random(15), random(150), 205);
    ranColorB3 = color(random(15), random(150), 155);
    ranColorB4 = color(random(15), random(150), 105);
    
    ranColorR1 = color(255, random(150), random(15));
    ranColorR2 = color(205, random(150), random(15));
    ranColorR3 = color(155, random(150), random(15));
    ranColorR4 = color(105, random(150), random(15));
  }
    
  
  
  noFill();
  
  strokeWeight(1);
  if(time%40 < 5) strokeWeight(1*time%40);
  if(time%40 < 10 && time%40 >= 5) strokeWeight(11-time%40);
  stroke(0);
  arc(0, 100, 100, 170, radians(320), radians(90));
  arc(0, 100, 100, 180, radians(320), radians(90));
  arc(0, 100, 100, 190, radians(320), radians(90));
  arc(0, 100, 103, 200, radians(320), radians(90));
  arc(0, 100, 103, 210, radians(320), radians(90));
  arc(0, 100, 103, 220, radians(320), radians(90));
  
  
  arc(30, 400, 250, 170, radians(150), radians(350));
  arc(30, 400, 250, 180, radians(150), radians(350));
  arc(30, 415, 260, 190, radians(150), radians(340));
  arc(30, 430, 280, 200, radians(150), radians(337));
  arc(30, 450, 330, 210, radians(150), radians(330));
  arc(30, 470, 430, 220, radians(150), radians(323));
  
  // arc(400, 0, 120, 250, 0, radians(300));
  // arc(400, 0, 120, 260, 0, radians(300));
  // arc(400, 0, 120, 270, 0, radians(300));
  // arc(400, 0, 120, 280, 0, radians(300));
  // arc(400, 0, 120, 290, 0, radians(300));
  
  arc(600,0, 800, 800, PI/2, PI);
  arc(600,0, 780, 780, PI/2, PI);
  arc(600,0, 760, 760, PI/2, PI);
  arc(600,0, 740, 740, PI/2, PI);
  
  strokeWeight(3);
  arc(600, 400, 600, 400, PI, 0);
  arc(600, 400, 580, 380, PI, 0);
  arc(600, 400, 560, 360, PI, 0);
  arc(600, 400, 540, 340, PI, 0);
  
  // 위 사선지
  strokeWeight(9);
  stroke(ranColorB1);
  line(0, 200, 100, 150);
  line(100, 150, 200, 125);
  line(200, 125, 270, 0);
  
  stroke(ranColorB2);
  line(0, 220, 100, 165);
  line(100, 165, 205, 135);
  line(205, 135, 290, 0);
  //strokeWeight(3);
  
  stroke(ranColorB3);
  line(0, 240, 100, 180);
  line(100, 180, 210, 145);
  line(210, 145, 320, 0);
  
  stroke(ranColorB4);
  line(0, 260, 100, 195);
  line(100, 195, 215, 155);
  line(215, 155, 360, 0);
  
  // 아래 사선지
  stroke(ranColorR1);
  line(0, 380, 150, 250);
  line(150, 250, 310, 200);
  line(310, 200, 420, 175);
  line(420, 175, 540, 0);
  
  stroke(ranColorR2);
  line(0, 390, 150, 270);
  line(150, 270, 320, 220);
  line(320, 220, 430, 205);
  line(430, 205, 580, 0);
  
  stroke(ranColorR3);
  line(0, 400, 150, 290);
  line(150, 290, 330, 240);
  line(330, 240, 440, 230);
  line(440, 230, 600, 40);
  
  stroke(ranColorR4);
  line(10, 400, 150, 310);
  line(150, 310, 340, 260);
  line(340, 260, 450, 250);
  line(450, 250, 600, 100);
  
  //square
  noStroke();
  
  // 중앙 큰 원
  fill(220);
  circle(420, 230, midCirSize*10);
  fill(0);
  circle(420, 230, midCirSize*9);
  fill(110);
  circle(420, 230, midCirSize*8.5);
  fill(240);
  circle(420, 230, midCirSize*4);
  fill(280);
  circle(420, 230, midCirSize*2);
  
  // 중앙 큰 원
  
  fill(140, 200, 255);
  quad(200, 250, 360, 130, 420, 210, 260, 330);
  
  fill(50,140,255);
  quad(250, 150, 350, 150, 350, 200, 250, 200);
  
  
  
  
  // 중앙 작은 원
  fill(220);
  circle(330, 165, midCirSize*6);
  fill(0);
  circle(330, 165, midCirSize*5);
  fill(110);
  circle(330, 165, midCirSize*4.5);
  fill(240);
  circle(330, 165, midCirSize*2);
  fill(280);
  circle(330, 165, midCirSize);
  
  if(cirTime%10 < 5) midCirSize = cirTime%5+5;
  
  
  // 중앙 작은 원
  
  
  // 왼쪽 위 삼각형
  let vxA = centerXA + cos(orbitAngleA) * orbitRadiusA;
  let vyA = centerYA + sin(orbitAngleA) * orbitRadiusA;
  
  let angleToCenterA = atan2(centerYA - vyA, centerXA - vxA);
  
  push();
  translate(vxA,vyA);
  rotate(angleToCenterA);
  fill(255, 50, 50);
  
  if(cirTime%10 > 6) scale(1*cirTime%2+0.85);
  triangle(0, 0, -10, -40, 10, -40);
  triangle(0, 0, 10, 40, -10, 40);
  triangle(0, 0, -40, -10, -40, 10);
  triangle(0, 0, 40, -10, 40, 10);
  pop();
  
  orbitAngleA += 0.1;
  // 왼쪽 위 삼각형
  
  // 오른쪽 아래 삼각형
  rectMode(CENTER);
  
  
  let vxB = centerXB + cos(orbitAngleB) * orbitRadiusB;
  let vyB = centerYB + sin(orbitAngleB) * orbitRadiusB;
  
  let angleToCenterB = atan2(centerYB - vyB, centerXB - vxB);
  
  push();
  translate(vxB,vyB);
  rotate(-angleToCenterB);
  fill(220, 150, 255);
  
  if(cirTime%10 > 6) scale(1*cirTime%2+0.85);
  triangle(0, 0, -30, -40, 30, -40);
  triangle(0, 0, -40, -30, -40, 30);
  triangle(0, 0, -30, 40, 30, 40);
  triangle(0, 0, 40, -30, 40, 30);
  // square(0, 0, 80);
  pop();

  orbitAngleB += 0.1;
  // 오른쪽 아래 삼각형
  
}

function keyPressed() {
  // 저장
  if (key === 's') {
    saveGif('mySketch', 10);
  }
  
}
