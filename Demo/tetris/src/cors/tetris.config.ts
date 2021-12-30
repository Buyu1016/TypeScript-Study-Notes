import { IPoint, IPoints } from "./interfaces";
import { getRandom } from "./utils/index";
import SquareGroup from "./SquareGroup";
import Square from "./Square";

/**
 *  O
 * OO
 *  O
 */
class ShapeOne extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x: 0, y: -1}, {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}],
            _squareCore,
            _color
        );
    }
}

/**
 *   O
 * OOO
 */
class ShapeTwo extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x: 0, y: -1}, {x: -2, y: 0}, {x: -1, y: 0}, {x: 0, y:0}],
            _squareCore,
            _color
        );
    }
}

/**
 * O
 * OOO
 */
class ShapeThree extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x: 0, y: -1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y:0}],
            _squareCore,
            _color
        );
    }
}

/**
 * O
 * O
 * O
 * O
 */
class ShapeFour extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x: 0, y: -2}, {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}],
            _squareCore,
            _color
        );
    }

    rotateSquare(squares: Square[] = []): void {
        super.rotateSquare(squares);
        this.rotateDirection = !this.rotateDirection;
    }
}

/**
 * O
 */
class ShapeFive extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x:0, y: 0}],
            _squareCore,
            _color
        );
    }

    rotateSquare(): void {}
}

/*
 * O
 * OO
 *  O
 */
class ShapeSix extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x: 0, y: -1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}],
            _squareCore,
            _color
        );
    }

    rotateSquare(squares: Square[] = []): void {
        super.rotateSquare(squares);
        this.rotateDirection = !this.rotateDirection;
    }
}

/**
 * OOO
 */
class ShapeSeven extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}],
            _squareCore,
            _color
        );
    }
    
    rotateSquare(squares: Square[] = []): void {
        super.rotateSquare(squares);
        this.rotateDirection = !this.rotateDirection;
    }
}

/**
 * OO
 * OO 
 */
class ShapeEight extends SquareGroup {
    constructor(
        _squareCore: IPoint,
        _color: string
    ) {
        super(
            [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
            _squareCore,
            _color
        );
    }
    
    rotateSquare(): void {}
}


const shapeArray: (typeof ShapeOne)[] = [ShapeOne, ShapeTwo, ShapeThree, ShapeFour, ShapeFive, ShapeSix, ShapeSeven, ShapeEight];

/**
 * 随机返回一个俄罗斯方块
 */
export default function randomTetris(centerPoint: IPoint): SquareGroup {
    const Shape = shapeArray[getRandom(0, shapeArray.length)];
    const color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    return new Shape(centerPoint, color);
}

