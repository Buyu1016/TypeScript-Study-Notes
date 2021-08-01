const my = '先生';
var sex;
(function (sex) {
    sex["male"] = "\u7537";
    sex["female"] = "\u5973";
})(sex || (sex = {}));
const mySex = sex.male;
var Grade;
(function (Grade) {
    Grade[Grade["grade1"] = 0] = "grade1";
    Grade[Grade["grade2"] = 1] = "grade2";
    Grade[Grade["grade3"] = 2] = "grade3";
})(Grade || (Grade = {}));
const myGrade = Grade.grade3;
console.log(myGrade);
var Color;
(function (Color) {
    Color["heart"] = "\u2665\uFE0F";
    Color["spade"] = "\u2660\uFE0F";
    Color["block"] = "\u2666\uFE0F";
    Color["blossom"] = "\u2663\uFE0F";
})(Color || (Color = {}));
var Point;
(function (Point) {
    Point["one"] = "A";
    Point["two"] = "2";
    Point["three"] = "3";
    Point["four"] = "4";
    Point["five"] = "5";
    Point["six"] = "6";
    Point["seven"] = "7";
    Point["eight"] = "8";
    Point["nine"] = "9";
    Point["ten"] = "10";
    Point["eleven"] = "J";
    Point["twelve"] = "Q";
    Point["thirteen"] = "K";
})(Point || (Point = {}));
var specialPoint;
(function (specialPoint) {
    specialPoint["JOKER"] = "\u5927\u738B";
    specialPoint["joker"] = "\u5C0F\u738B";
})(specialPoint || (specialPoint = {}));
class Poker2 {
    constructor(isAbandon) {
        this.isAbandon = isAbandon;
        this.pokerArr = [];
    }
    create() {
        for (const iterator of Object.values(Color)) {
            for (const item of Object.values(Point)) {
                this.pokerArr.push(`${iterator}${item}`);
            }
        }
        if (this.isAbandon) {
            for (const iterator of Object.values(specialPoint)) {
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
const poker2 = new Poker2(true);
poker2.create();
