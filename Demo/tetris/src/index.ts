import Square from "./cors/Square";
import SquareExhibition from "./cors/SquareExhibition";
import $ from 'jquery';
import { operation } from './cors/utils/index'

const square = new Square({
    x: 0,
    y: 0
}, '#abcdef');
square.view = new SquareExhibition(square, $(".root"));
square.point = {
    x: 1, 
    y: 0
}
operation(square);
