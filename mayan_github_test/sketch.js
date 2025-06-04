let bgImg;
let customFont;

function preload() {
  bgImg = loadImage("https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/0.jpeg?v=1749023384216");
  customFont = loadFont("https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font0.ttf?v=1749023860977");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
}

function draw() {
  background(bgImg);
  text("Mayan Pattern Generator", width / 2, height / 2);
}
