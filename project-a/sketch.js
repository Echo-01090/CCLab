// function setup() {
//     createCanvas(400, 400);
//   }
  
  // Set up for VS code in the following
  
  function setup() {
      let canvas = createCanvas(800,500)
      canvas.id("p5-canvas");
      canvas.parent("p5-canvas-container");
    }
  
  function draw() {
    background(220);
  
    // function CALL, execute, run,
    drawCar(100, 100);
    drawCar(250, 150);
  
    text("this is a test page for project A", 200, 300);
  }
  
  // function DEFINITION
  function drawCar(xPos, yPos, speed) {
    push();
    translate(xPos, yPos);
  
    // light
    fill("blue");
    ellipse(-10, -40, 10, 20);
  
    // body
    fill(0);
    rect(-20, -40, 40, 40);
    rect(-60, 0, 120, 40);
  
    // window
    fill(198, 238, 255);
    rect(-17, -37, 34, 37, 5);
  
    // driver
    textSize(30);
    text("😇", -15, -5);
  
    // decoration
    fill("red");
    rect(-60, 20, 120, 5);
    fill("blue");
    rect(-60, 25, 120, 5);
  
    // wheels
    fill(0);
    // circle(-25, 40, 30);
    // circle(25, 40, 30);
  
    drawWheels(-25, 40, speed);
    drawWheels(25, 40, speed);
  
    // helping point
    fill("red");
    circle(0, 0, 5);
  
    pop();
  }
  
  function drawWheels(xPos, yPos, speed) {
    // can repeatly used because it is not global
    push();
    translate(xPos, yPos);
    rotate(frameCount * 0.05);
    // drawings comes
    ellipse(0, 0, 33, 28);
  
    // helping point
    fill("red");
    circle(0, 0, 5);
    pop();
  }
  