import { IViews } from "../interfaces";
import Square from '../Square/index';
import $ from 'jquery';
import Options from '../config'

export default class SquareExhibition implements IViews {

    private _dom?: JQuery<HTMLElement>;
    private _removeDom: boolean = false;

    constructor(
        private _square: Square,
        private _container: JQuery<HTMLElement>
    ) {
 
    }

    show(): void {
        if (this._removeDom) return
        // 如果没有dom则创建一个
        if (!this._dom) {
            this._dom = $("<div>").css({
                position: "absolute",
                width: Options.SquareConfig.width,
                height: Options.SquareConfig.height,
                border: `1px solid ${Options.SquareConfig.borderColor}`,
                boxSizing: "border-box",
                background: this._square.color
            }).appendTo(this._container);
        }
        // 更改定位
        this._dom.css({
            left: this._square.point.x * Options.SquareConfig.width + 'px',
            top: this._square.point.y * Options.SquareConfig.height + 'px'
        })
    }
    hide(): void {
        if (this._removeDom) return
        !this._removeDom && this._dom?.remove();
        this._removeDom = true;
    }
    
}