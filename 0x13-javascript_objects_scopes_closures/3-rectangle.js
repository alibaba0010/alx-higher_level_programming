#!/usr/bin/node
class Rectangle {
  constructor(width, height) {
    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      let s = "";
      for (let j = 0; j < this.width; j++) {
        s += "X";
      }
      console.log(s);
    }
  }
}

module.exports = Rectangle;
