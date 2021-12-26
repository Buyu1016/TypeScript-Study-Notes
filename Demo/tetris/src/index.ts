import SquareGroup from "./cors/SquareGroup";
import $ from "jquery";
import randomTetris from "./cors/tetris.config"

const squareGroup = randomTetris({
    x: 4,
    y: 6 
});

squareGroup.show();

$(".btn-show").click(() => {
    squareGroup.show();
})

$(".btn-down").click(() => {
    squareGroup.squareCore = {
        x: squareGroup.squareCore.x,
        y: squareGroup.squareCore.y + 1
    }
}); 

$(".btn-remove").click(() => {
    squareGroup.hide();
})

