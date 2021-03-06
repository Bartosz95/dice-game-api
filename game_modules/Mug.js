const Dice = require('./Dice');

module.exports =  class Mug {

    constructor(dices) {
        this.dices = dices;
        this.countOfDice = dices.length;
    }

    rollTheDices(numberOnTopSide) {
        console.log(numberOnTopSide);
        if(numberOnTopSide.length == 0) 
            this.dices.forEach((item) => {
                item.roll()
            });
        else {
            numberOnTopSide = numberOnTopSide.splice(0, this.dices.length);
            this.dices.forEach((item) => {
                if(numberOnTopSide.includes(item.number)){
                    delete numberOnTopSide[numberOnTopSide.indexOf(item.number)];
                    item.roll()
                }
            });
        }
    }
}