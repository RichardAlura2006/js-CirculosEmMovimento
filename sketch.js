let cor;
let PosiçãoHorizontal; //x
let PosiçãoVertical; //y

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  PosiçãoHorizontal = 200;
  PosiçãoVertical = 200
}

function draw() {
  fill (cor)
  circle (PosiçãoHorizontal, PosiçãoVertical, 50)
  if(mouseX < PosiçãoHorizontal) {
    PosiçãoHorizontal--;
  }
  if(mouseX > PosiçãoHorizontal) {
    PosiçãoHorizontal++;
  }
  if(mouseY < PosiçãoVertical) {
    PosiçãoVertical--
  }
  if(mouseY > PosiçãoVertical) {
    PosiçãoVertical++;
  }
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
 }
}