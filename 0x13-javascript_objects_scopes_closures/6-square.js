#!/usr/bin/node
const SquarePrev = require("./5-square");

class Square extends SquarePrev {
  charPrint(c) {
    if (c === undefined) {
      c = "X";
    }
    for (let i = 0; i < this.height; i++) {
      let sq = "";
      for (let j = 0; j < this.width; j++) {
        sq += c;
      }
      console.log(sq);
    }
  }
}

module.exports = Square;
