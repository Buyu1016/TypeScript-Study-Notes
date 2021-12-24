import { IPoint, IViews } from '../interfaces/index';

export default class Square {

    private _view?: IViews;

    constructor(
        private _point: IPoint,
        private _color: string
    ) {

    }
    
    public get point(): IPoint {
        return this._point;
    }

    public set point(value: IPoint) {
        this._point = value;
        this._view?.show();
    }

    public get color(): string {
        return this._color;
    }

    public get view() {
        return this._view;
    }

    public set view(value){
        this._view = value;
    }
    
}