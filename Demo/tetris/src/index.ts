import Square from "./cors/Square";
import SquareExhibition from "./cors/SquareExhibition";

const square = new Square({
    x: 0,
    y: 0
}, 'red');
square.view = new SquareExhibition(square);
square.point = {
    x: 1,
    y: 2
}
square.point = {
    x: 2,
    y: 5
}
square.point = {
    x: 7,
    y: 10
}