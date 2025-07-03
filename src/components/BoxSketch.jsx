import React from "react";
import Sketch from "react-p5";

const BoxSketch = () => {
  const boxPop = 15;//15
  let boxes = [];

  class Box {
    constructor(p5) {
      this.p5 = p5;
      this.boxWidth = 12;
      this.boxHeight = 12;
      this.xSpeed = p5.random(p5.random(-1.2, -1), p5.random(1, 1.2)/4);
      this.ySpeed = p5.random(p5.random(-1.2, -1), p5.random(1, 1.2)/4);
      this.xPos = p5.random(0, p5.width - this.boxWidth);
      this.yPos = p5.random(0, p5.height - this.boxHeight);
      this.color = this.setRandomColor();
    }

    setRandomColor() {
      const { p5 } = this;
      const colors = [
        p5.color(0, 153, 255),
        p5.color(0, 225, 255),
        p5.color(31, 191, 255),
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    show() {
      const { p5 } = this;
      const c = p5.color(
        this.color.levels[0],
        this.color.levels[1],
        this.color.levels[2]
      );
      p5.fill(c);
      p5.noStroke();
      p5.ellipse(this.xPos, this.yPos, this.boxWidth, this.boxHeight);
    }

    update() {
      this.xPos += this.xSpeed;
      this.yPos += this.ySpeed;
      if (this.xPos >= this.p5.width - this.boxWidth || this.xPos < 0) this.xSpeed *= -1;
      if (this.yPos >= this.p5.height - this.boxHeight || this.yPos < 0) this.ySpeed *= -1;
    }

    intersects(other) {
      const d = this.p5.dist(
        this.xPos + this.boxWidth,
        this.yPos + this.boxHeight,
        other.xPos + other.boxWidth,
        other.yPos + other.boxHeight
      );
    
      if (d <= 200) {
    
        return true;
      }
    }
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    boxes = [];
    for (let i = 0; i < boxPop; i++) {
      boxes.push(new Box(p5));
    }
  };

  const draw = (p5) => {
    p5.background(255);

    for (let i = 0; i < boxPop; i++) {
      boxes[i].update();
      boxes[i].show();
    }

    for (let i = 0; i < boxPop; i++) {
      for (let j = 0; j < boxPop; j++) {
        for (let k = 0; k < boxPop; k++) {
          if (
            i !== j &&
            i !== k &&
            j !== k &&
            boxes[i].intersects(boxes[j]) &&
            boxes[i].intersects(boxes[k]) &&
            boxes[j].intersects(boxes[k])
          ) {
            const col = boxes[k].color;
            const triangleCol = p5.color(col.levels[0], col.levels[1], col.levels[2], 2);
            p5.fill(triangleCol);
            p5.noStroke();
            p5.triangle(
              boxes[i].xPos + boxes[i].boxWidth / 2,
              boxes[i].yPos + boxes[i].boxHeight / 2,
              boxes[j].xPos + boxes[j].boxWidth / 2,
              boxes[j].yPos + boxes[j].boxHeight / 2,
              boxes[k].xPos + boxes[k].boxWidth / 2,
              boxes[k].yPos + boxes[k].boxHeight / 2
            );
          }
        }
      }
    }
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default BoxSketch;
