export default class Dice {
  constructor() {
    this.d2 = this.makeDie(2)
    this.d3 = this.makeDie(3)
    this.d4 = this.makeDie(4)
    this.d6 = this.makeDie(6)
    this.d8 = this.makeDie(8)
    this.d10 = this.makeDie(10)
    this.d12 = this.makeDie(12)
    this.d20 = this.makeDie(20)
    this.d100 = this.makeDie(100)
  }

  makeDie(sides) {
    var die = function () {
      return 1 + Math.random() * sides | 0;
    };

    die.times = function (count) {
      var rolls = [];
      for (var i = 0; i < count; i++) {
        rolls.push(this());
      }
      return rolls;
    };

    return die;
  }

  roll(expression) {
    var self = this;
    let rolls = [];

    expression.toLowerCase().replace(/(\d+)(d\d+)?/g, function (_, count, die) {
      if (die) {
        rolls = rolls.concat(self[die].times(+count));
      } else {
        rolls.push(+count);
      }
    });
    return rolls.reduce(function (sum, roll) {
      return sum + roll;
    });
  }
}