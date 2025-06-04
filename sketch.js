let imageUrls = [
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/0.jpeg?v=1749023384216",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/1.jpeg?v=1749023399275",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/2.jpeg?v=1749023415502",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/3.jpeg?v=1749023442940",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/4.jpeg?v=1749023458863",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/5.jpeg?v=1749023478734",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/6.jpeg?v=1749023495829",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/7.jpeg?v=1749023587200",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/8.jpeg?v=1749023626568",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/9.jpeg?v=1749023646051",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/10.jpeg?v=1749023667396",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/11.jpeg?v=1749023686570",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/12.jpeg?v=1749023706669",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/13.jpeg?v=1749023722405",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/14.jpeg?v=1749023740018",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/15.jpeg?v=1749023757032",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/16.jpeg?v=1749023771512",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/17.jpeg?v=1749023784099",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/18.jpeg?v=1749023804427",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/19.jpeg?v=1749023824168"
];

let fontUrls = [
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font0.ttf?v=1749023860977",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font1.ttf?v=1749023880865",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font2.ttf?v=1749023885579",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font3.ttf?v=1749023891092",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font4.ttf?v=1749023899565",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font5.ttf?v=1749023904053",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font6.ttf?v=1749023909336",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font7.ttf?v=1749023914489",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font8.ttf?v=1749023919014",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font9.ttf?v=1749023951179",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font10.ttf?v=1749023955879",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font11.ttf?v=1749023960793",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font12.ttf?v=1749023967965",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font13.ttf?v=1749023978071",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font14.ttf?v=1749023990807",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font15.ttf?v=1749023995504",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font16.ttf?v=1749024005916",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font17.ttf?v=1749024009642",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font18.ttf?v=1749024021704",
  "https://cdn.glitch.global/09071140-3243-45a0-8246-317b674dc032/font19.ttf?v=1749024028637"
];

let images = [];
let fonts = [];
let inputName, inputDOB, submitButton;
let bgImage = null;
let customFont = null;
let resultText = "";

function preload() {
  for (let i = 0; i < 20; i++) {
    images[i] = loadImage(imageUrls[i]);
    fonts[i] = loadFont(fontUrls[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputName = createInput().attribute("placeholder", "Enter your name");
  inputName.position(20, 20);

  inputDOB = createInput().attribute("placeholder", "Enter DOB (DD MM YYYY)");
  inputDOB.position(20, 60);

  submitButton = createButton("Generate Pattern");
  submitButton.position(20, 100);
  submitButton.mousePressed(generatePattern);
}

function generatePattern() {
  const name = inputName.value().trim();
  const dobParts = inputDOB.value().trim().split(" ");
  const day = parseInt(dobParts[0]);

  if (!name || isNaN(day)) {
    resultText = "Please enter a valid name and date.";
    return;
  }

  const index = day % 20;
  bgImage = images[index];
  customFont = fonts[index];
  resultText = `Mayan Sign for ${name}: Sign ${index + 1}`;
}

function draw() {
  background(0);
  if (bgImage) {
    image(bgImage, 0, 0, width, height);
  }

  if (customFont && resultText) {
    textFont(customFont);
    textSize(36);
    fill(255);
    textAlign(CENTER, CENTER);
    text(resultText, width / 2, height / 2);
  }
}
