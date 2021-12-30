import Square from "../Square";
import { IPoint, IViews, IPoints } from "../interfaces"
import SquareExhibition from "../view/SquareExhibition";
import $ from "jquery";
import GameRules from "../GameRules";

/**
 * 方块组合类
 *  由: 方块形状、方块中心点、方块颜色组成
 */
export default class SquareGroup implements IViews {

    private _squares: Square[];

    constructor(
        private _shape: IPoints,
        private _squareCore: IPoint,
        private _color: string
    ) {
        this._squares = this._shape.map((item: IPoint) => {
            const square = new Square({
                x: item.x + this._squareCore.x,
                y: item.y + this._squareCore.y
            }, this._color);
            return square;
        })
    }
    
    public get squareCore() : IPoint {
        return this._squareCore;
    }
    
    public set squareCore(v : IPoint) {
        // 更新坐标
        this._squareCore = v;
        // 更新组合坐标
        for (let i = 0; i < this._squares.length; i++) {
            this._squares[i].point = {
                x: this._shape[i].x + this._squareCore.x,
                y: this._shape[i].y + this._squareCore.y
            }
        }
    }
    
    public get shape() : IPoints {
        return this._shape;
    }

    private set shape(v: IPoints) {
        this._shape = v;
        this.squareCore = this.squareCore;
    }

    
    public get squares() : Square[] {
        return this._squares;
    }
    

    show(container: JQuery<HTMLElement> = $(".main")): void {
        for (let i = 0; i < this._squares.length; i++) {
            if (this._squares[i].view) return;
            this._squares[i].view = new SquareExhibition(this._squares[i], container);
            this._squares[i].point = {
                x: this._shape[i].x + this._squareCore.x,
                y: this._shape[i].y + this._squareCore.y
            }
        }
    }

    hide(container: JQuery<HTMLElement> = $(".main")): void {
        for (const square of this._squares) {
            if (square.view) {
                square.view.hide();
                square.view = new SquareExhibition(square, container);
            }
        }
    }

    protected rotateDirection: boolean = true;

    /**
     * 获取方块组合旋转后的shape
     * @returns 
     */
    private getRotateShape(): IPoints {
        if (this.rotateDirection) {
            // 顺时针旋转
            return this._shape.map(item => {
                return {
                    x: - item.y,
                    y: item.x
                }
            })
        } else {
            // 逆时针旋转
            return this._shape.map(item => {
                return {
                    x: item.y,
                    y: - item.x
                }
            })
        }
    }

    rotateSquare(squares: Square[] = []): void {
        const result = this.getRotateShape();
        if (GameRules.ifMove(result, this._squareCore, squares)) {
            this.shape = result;
        }
    }

}