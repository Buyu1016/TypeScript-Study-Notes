Object.defineProperty(exports, "__esModule", { value: true });
exports.Poker3 = void 0;
const enums_1 = require("./enums");
class Poker3 {
    constructor(isAbandon) {
        this.isAbandon = isAbandon;
        this.pokerArr = [];
    }
    create() {
        for (const iterator of Object.values(enums_1.Color)) {
            for (const item of Object.values(enums_1.Point)) {
                this.pokerArr.push(`${iterator}${item}`);
            }
        }
        if (this.isAbandon) {
            for (const iterator of Object.values(enums_1.specialPoint)) {
                this.pokerArr.push(iterator);
            }
        }
    }
    print() {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌');
            return;
        }
        for (const iterator of this.pokerArr) {
            console.log(iterator);
        }
    }
    clear() {
        this.pokerArr = [];
        console.log('已清空牌组');
    }
    searchPoker(color) {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌');
            return;
        }
        for (const iterator of this.pokerArr) {
            if (iterator.indexOf(color) >= 0) {
                console.log(iterator);
            }
        }
    }
    shufflePoker() {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌');
            return;
        }
        this.pokerArr = this.pokerArr.sort(item => Math.random() - 0.5);
    }
}
exports.Poker3 = Poker3;
