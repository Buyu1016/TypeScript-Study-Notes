import { IGameViews, GameState } from "../../interfaces";
import SquareGroup from "../../SquareGroup";
import $ from "jquery";
import Game from "../../Game";
import Options from "../../config";

export default class GameExhibition implements IGameViews {
    private _gameStateDiv = $("<div>");
    init(game: Game): void {
        // 根据配置设置面板
        $(".main").css({
            width: Options.SquareConfig.width * Options.GameConfig.width + "px",
            height: Options.SquareConfig.height * Options.GameConfig.height + "px"
        })
        $(".wait").css({
            width: Options.SquareConfig.width * Options.WaitConfig.width + "px",
            height: Options.SquareConfig.height * Options.WaitConfig.height + "px"
        })
        $(".tip").css({
            width: Options.SquareConfig.width * Options.WaitConfig.width + "px",
            height: Options.SquareConfig.height * Options.GameConfig.height + "px"
        })
        this._gameStateDiv.css({
            position: "absolute",
            width: Options.SquareConfig.width * Options.GameConfig.width + "px",
            height: Options.SquareConfig.height * Options.GameConfig.height + "px",
            color: "red",
            fontSize: "30px",
            fontWeight: "bold",
            lineHeight: Options.SquareConfig.height * Options.GameConfig.height + "px",
            textAlign: "center",
            zIndex: 9999
        }).appendTo($(".main"));
        this.showGameState(game.gameState);
    }
    showNext(tetris: SquareGroup): void {
        tetris.show($(".wait"));
    }
    switch(tetris: SquareGroup): void {
        tetris.hide($(".main"));
    }
    showScore(text: number) {
        $(".score").text(text);
    }
    showDifficulty(text: string) {
        $(".difficulty").text(text);
    }
    showGameState(gameState: GameState) {
        if (gameState === GameState.notPlay) {
            this._gameStateDiv.text("游戏未开始");
        } else if (gameState === GameState.playing) {
            this._gameStateDiv.text("");
        } else if (gameState === GameState.pause) {
            this._gameStateDiv.text("游戏暂停");
        } else if (gameState === GameState.end) {
            this._gameStateDiv.text("游戏结束");
        }
    }
}