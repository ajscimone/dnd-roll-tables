const { describe, it } = require('mocha') 
var assert = require('assert'); // node.js assertion library
import Dice from "../src/util/dice"


describe('Check Mocha', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
});


describe('Dice Tests', function () {
  let dice = new Dice;
  describe('roll', function () {
    it('', function () {
      let expression = "1d6"
      let roll = dice.roll(expression)
      console.log(roll)
      assert(roll >= 1)
      assert(roll <= 6)
    });
  });
});
