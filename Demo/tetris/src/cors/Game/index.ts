import SquareGroup from "../SquareGroup";
import { GameState, SquareDirection, IGameViews, IPoint } from "../interfaces";
import randomTetris from "../tetris.config";
import GameRules from "../GameRules";
import Options from "../config";
import $ from "jquery";
import Square from "../Square";

export default class Game {
    private _gameState: GameState = GameState.notPlay;
    private _currentSquare?: SquareGroup;
    private _nextSquare: SquareGroup = randomTetris({x: 0, y: 0});
    private _timer?: number;
    private _time: number = 500;
    private _squares: Square[] = [];

    constructor(
        private _gameView: IGameViews
    ) {
        _gameView.showNext(this._nextSquare);
        this.againGetPoint(Options.WaitConfig.width, this._nextSquare);
        this.operationSquare();
    }
    
    public get nextSquare() : SquareGroup {
        return this._nextSquare;
    }
    
    public get currentSquare() : SquareGroup | undefined {
        return this._currentSquare;
    }

    start(): void {
        if (this._gameState !== GameState.playing) {
            this._gameState = GameState.playing;
            if (!this._currentSquare) this.replaceSquare();
            this.timingMove();
        }
    }
    
    pause(): void {
        if (this._gameState === GameState.playing) {
            this._gameState = GameState.pause;
            clearInterval(this._timer);
            this._timer = undefined;
        }
    }

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
                const result = GameRules.move(this._currentSquare, targetDirection, this._squares);
                if (!result) {
                    clearInterval(this._timer);
                    this.touchBottom();
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

    private operationSquare(): void {
        $(document).keydown(key => {
            const keyArr = {
                left: 37,
                right: 39,
                down: 40,
                pause: 32,
                rotate: 82
            }
            if (this._gameState !== GameState.playing) {
                this.start();
                return;
            }
            switch (key.keyCode) {
                case keyArr.down:
                    this._currentSquare && GameRules.move(this._currentSquare, SquareDirection.down, this._squares);
                    break;
                case keyArr.left:
                    this._currentSquare && GameRules.move(this._currentSquare, SquareDirection.left, this._squares);
                    break;
                case keyArr.right:
                    this._currentSquare && GameRules.move(this._currentSquare, SquareDirection.right, this._squares);
                    break;
                case keyArr.pause:
                    this.pause();
                    break;
                case keyArr.rotate:
                    this._currentSquare && this._currentSquare.rotateSquare();
                    break;
            }
        })
    }

    private touchBottom() {
        if (this._currentSquare) {
            this._squares.push(...this._currentSquare.squares);
        };
        this.replaceSquare();
        this.timingMove();
    }
}