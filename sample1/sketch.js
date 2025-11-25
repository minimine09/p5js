function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 250, 255);
  
  noFill();
  
  
  strokeWeight(1);
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
  
  arc(400, 0, 120, 250, 0, radians(300));
  arc(400, 0, 120, 260, 0, radians(300));
  arc(400, 0, 120, 270, 0, radians(300));
  arc(400, 0, 120, 280, 0, radians(300));
  arc(400, 0, 120, 290, 0, radians(300));
  
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
  stroke(102, 204, 255);
  line(0, 200, 100, 150);
  line(100, 150, 200, 125);
  line(200, 125, 270, 0);
  
  stroke(0, 102, 204);
  line(0, 220, 100, 165);
  line(100, 165, 205, 135);
  line(205, 135, 290, 0);
  //strokeWeight(3);
  
  stroke(0, 0, 255);
  line(0, 240, 100, 180);
  line(100, 180, 210, 145);
  line(210, 145, 320, 0);
  
  stroke(0, 0, 204);
  line(0, 260, 100, 195);
  line(100, 195, 215, 155);
  line(215, 155, 360, 0);
  
  // 아래 사선지
  stroke(0, 0, 153);
  line(0, 380, 150, 250);
  line(150, 250, 310, 200);
  line(310, 200, 420, 175);
  line(420, 175, 540, 0);
  
  stroke(0, 0, 102);
  line(0, 390, 150, 270);
  line(150, 270, 320, 220);
  line(320, 220, 430, 205);
  line(430, 205, 580, 0);
  
  stroke(0, 0, 51);
  line(0, 400, 150, 290);
  line(150, 290, 330, 240);
  line(330, 240, 440, 230);
  line(440, 230, 600, 40);
  
  stroke(0, 0, 0);
  line(10, 400, 150, 310);
  line(150, 310, 340, 260);
  line(340, 260, 450, 250);
  line(450, 250, 600, 100);
  
  //square
  noStroke();
  
  
  fill(220);
  circle(420, 230, 100);
  fill(0);
  circle(420, 230, 90);
  fill(110);
  circle(420, 230, 85);
  fill(240);
  circle(420, 230, 40);
  fill(280);
  circle(420, 230, 20);
  
  fill(140, 200, 255);
  quad(200, 250, 360, 130, 420, 210, 260, 330);
  
  fill(50,140,255);
  quad(250, 150, 350, 150, 350, 200, 250, 200);
  
  fill(220);
  circle(330, 165, 60);
  fill(0);
  circle(330, 165, 50);
  fill(110);
  circle(330, 165, 45);
  fill(240);
  circle(330, 165, 20);
  fill(280);
  circle(330, 165, 10);
  
  fill(255, 50, 50);
  triangle(100, 50, 120, 50, 110, 90);
  triangle(110, 90, 120, 130, 100, 130);
  triangle(70, 80, 110, 90, 70, 100);
  triangle(110, 90, 150, 80, 150, 100);
  
  rectMode(CENTER);
  square(550, 300, 80);
  
  fill(220, 250, 255);
  triangle(550, 300, 520, 260, 580, 260);
  triangle(550, 300, 510, 270, 510, 330);
  triangle(550, 300, 520, 340, 580, 340);
  triangle(550, 300, 590, 270, 590, 330);
  
}
