import SquareGroup from "./cors/SquareGroup";
import $ from "jquery";
import randomTetris from "./cors/tetris.config";
import Options from "./cors/config";
import GameRules from "./cors/GameRules";
import { IPoint, SquareDirection } from "./cors/interfaces";

const squareGroup = randomTetris({
    x: Math.floor(Options.GameConfig.width / 2),
    y: 1
});

squareGroup.show();

$(".btn-show").click(() => {
    squareGroup.show();
})
GameRules.continuedMove(squareGroup, SquareDirection.down);
$(document).keydown(key => {
    const square = squareGroup;
    const keyArr = {
        down: 40,
        up: 38,
        left: 37,
        right: 39
    }
    let point: IPoint | undefined;
    switch (key.keyCode) {
        case keyArr.down:
            point = {
                x: square.squareCore.x,
                y: square.squareCore.y + 1
            }
            GameRules.move(squareGroup, SquareDirection.down);
            break;
        case keyArr.up:
            point = {
                x: square.squareCore.x,
                y: square.squareCore.y - 1
            }
            GameRules.move(squareGroup, SquareDirection.up);
            break;
        case keyArr.left:
            point = {
                x: square.squareCore.x - 1,
                y: square.squareCore.y
            }
            GameRules.move(squareGroup, SquareDirection.left);
            break;
        case keyArr.right:
            point = {
                x: square.squareCore.x + 1,
                y: square.squareCore.y
            }
            GameRules.move(squareGroup, SquareDirection.right);
            break;
    }
    // if(point) {
    //     if (GameRules.ifMove(square.shape, point)) {
    //         GameRules.move(square, point)
    //     }
    // }
    
})

$(".btn-remove").click(() => {
    squareGroup.hide();
})

