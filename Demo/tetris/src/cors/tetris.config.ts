import { IPoint, IPoints } from "./interfaces";
import { getRandom } from "./utils/index";
import SquareGroup from "./SquareGroup";

const shapeOne: IPoints = [{x: 0, y: -1}, {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}];
const shapeTwo: IPoints = [{x: 0, y: -1}, {x: -2, y: 0}, {x: -1, y: 0}, {x: 0, y:0}];
const shapeThree: IPoints = [{x: 0, y: -1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y:0}];
const shapeFour: IPoints = [{x: 0, y: -2}, {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}];
const shapeFive: IPoints = [{x:0, y: 0}];
const shapeSix: IPoints = [{x: 0, y: -1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}];
const shapeSeven: IPoints = [{x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}];
const shapeEight: IPoints = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}];

const shapeArray = [shapeOne, shapeTwo, shapeThree, shapeFour, shapeFive, shapeSix, shapeSeven, shapeEight];

/**
 * 随机返回一个俄罗斯方块
 */
export default function randomTetris(centerPoint: IPoint) {
    const shape = shapeArray[getRandom(0, shapeArray.length)];
    const color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    return new SquareGroup(shape, centerPoint, color);
}

