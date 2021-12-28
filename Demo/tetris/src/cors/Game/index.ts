import SquareGroup from "../SquareGroup";
import { GameState, SquareDirection, IGameViews, IPoint } from "../interfaces";
import randomTetris from "../tetris.config";
import GameRules from "../GameRules";
import Options from "../config";

export default class Game {
    private _gameState: GameState = GameState.notPlay;
    private _currentSquare?: SquareGroup;
    private _nextSquare: SquareGroup = randomTetris({x: 0, y: 0});
    private _timer?: number;
    private _time: number = 500;
    
    constructor(
        private _gameView: IGameViews
    ) {
        _gameView.showNext(this._nextSquare);
        this.againGetPoint(Options.WaitConfig.width, this._nextSquare);
    } 

    
    public get nextSquare() : SquareGroup {
        return this._nextSquare;
    }
    
    public get currentSquare() : SquareGroup | undefined {
        return this._currentSquare;
    }

    start(): void {
        if (this._gameState !== GameState.playing) this._gameState = GameState.playing;
        this.replaceSquare();
        this.timingMove();
    }
    
    pause(): void {}

    private replaceSquare() {
        this._gameView.switch(this._nextSquare);
        this._currentSquare = this._nextSquare;
        this.againGetPoint(Options.GameConfig.width, this._currentSquare);
        this._nextSquare = randomTetris({x: 0, y: 0});
        this._gameView.showNext(this._nextSquare);
        this.againGetPoint(Options.WaitConfig.width, this._nextSquare);
    }
    
    private timingMove(targetDirection: SquareDirection = SquareDirection.down) {
        this._timer = (setInterval(() => {
            if (this._currentSquare) {
                const result = GameRules.move(this._currentSquare, targetDirection);
                if (!result) {
                    clearInterval(this._timer);
                    this.replaceSquare();
                    this.timingMove();
                }
            }
        }, this._time) as unknown) as number;
    }

    private againGetPoint(width: number, tetris: SquareGroup) {
        const pointX: number = Math.floor(width / 2);
        tetris.squareCore = {x: pointX, y: tetris.squareCore.y};
        if (!GameRules.ifMove(tetris.shape, {x: pointX, y: tetris.squareCore.y})) { // 说明当前位置已经触碰到边界
            tetris.squareCore = {x: pointX, y: tetris.squareCore.y + 1};
            if (!GameRules.ifMove(tetris.shape, {x: pointX, y: tetris.squareCore.y})) {
                this.againGetPoint(width, tetris);
            }
        }
    }
}