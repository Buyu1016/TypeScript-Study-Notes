import { IViews } from "../interfaces";
import Square from '../Square/index'

export default class SquareExhibition implements IViews {

    constructor(
        private _square: Square
    ) {

    }

    show(): void {
        console.log(this._square.point, this._square.color);
    }
    hide(): void {
        
    }
    
}