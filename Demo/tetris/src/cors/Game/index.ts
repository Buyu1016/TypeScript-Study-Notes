import SquareGroup from "../SquareGroup";
import { GameState, SquareDirection, IGameViews, DifficultyArr } from "../interfaces";
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
    private _time: DifficultyArr = DifficultyArr.level1;
    private _squares: Square[] = [];
    private _score: number = 0;

    constructor(
        private _gameView: IGameViews
    ) {
        _gameView.showNext(this._nextSquare);
        this.againGetPoint(Options.WaitConfig.width, this._nextSquare);
        this.operationSquare();
        _gameView.showScore(this._score);
        _gameView.showDifficulty(DifficultyArr[this._time]);
    }
    
    public get nextSquare() : SquareGroup {
        return this._nextSquare;
    }
    
    public get currentSquare() : SquareGroup | undefined {
        return this._currentSquare;
    }

    private set score(v: number) {
        this._score = v;
        const scoreDifficulty = {
            level1: 2,
            level2: 5,
            level3: 10,
            level4: 20,
            level5: 50,
        }
        if (this._score >= scoreDifficulty.level5) {
            this.difficulty = DifficultyArr.level5
        } else if (this._score >= scoreDifficulty.level4) {
            this.difficulty = DifficultyArr.level4
        } else if (this._score >= scoreDifficulty.level3) {
            this.difficulty = DifficultyArr.level3
        } else if (this._score >= scoreDifficulty.level2) {
            this.difficulty = DifficultyArr.level2
        } else {
            this.difficulty = DifficultyArr.level1            
        }
        this._gameView.showScore(this._score);
    }

    private set difficulty(v: DifficultyArr) {
        this._time = v;
        this._gameView.showDifficulty(DifficultyArr[this._time]);
    }

    start(): void {
        if (this._gameState === GameState.playing) return;
        if (this._gameState === GameState.end) {
            this.clearGame();
        }
        this._gameState = GameState.playing;
        if (!this._currentSquare) this.replaceSquare();
        this.timingMove();
    }
    
    pause(): void {
        if (this._gameState === GameState.playing) {
            this._gameState = GameState.pause;
            clearInterval(this._timer);
            this._timer = undefined;
        }
    }

    private replaceSquare() {
        this._currentSquare = this._nextSquare;
        this._currentSquare.squares.forEach(it => {
            it.view?.hide();
        })
        this.againGetPoint(Options.GameConfig.width, this._currentSquare);
        if(!this.determineEnd()) {
            this._gameState = GameState.end;
            clearInterval(this._timer);
            this._timer = undefined;
            return;
        }
        this._nextSquare = randomTetris({x: 0, y: 0});
        this.againGetPoint(Options.WaitConfig.width, this._nextSquare);
        this._gameView.switch(this._currentSquare);
        this._gameView.showNext(this._nextSquare);
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
                    this._currentSquare && this._currentSquare.rotateSquare(this._squares);
                    break;
            }
        })
    }

    private touchBottom() {
        if (this._currentSquare) {
            this._squares.push(...this._currentSquare.squares);
        };
        this.decisionEliminate();
        this.replaceSquare();
        if (this._gameState === GameState.playing) {
            this.timingMove();
        }
    }

    private decisionEliminate() {
        for (let i = 0; i < Options.GameConfig.height; i++) {
            let total = 0;
            for (const square of this._squares) {
                if (square.point.y === i) total ++;
            }
            // 说明当前这一行都有方块
            if (total === Options.GameConfig.width) {
                // 进行消除该行的处理并需要把剩余所有方块向下移动一格
                this.eliminateLine(i);
            }
        }
    }

    private eliminateLine(index: number) {
        const result = this._squares.filter((item) => {
            // 消除该方块并且在现在保存的地图上也消除掉
            if (item.point.y === index) {
                item.view?.hide();
                return false;
            }
            return true;
        })
        this._squares = result;
        // 需要将该层级上的所有方块的坐标y向下移动一格
        this._squares.forEach((item, i) => {
            if (item.point.y < index) {
                // 该方块需要下移
                item.point = {
                    x: item.point.x,
                    y: item.point.y + 1
                }
            }
        })
        this.score = this._score + 1;
    }

    private determineEnd() {
        if (this._nextSquare)
        return GameRules.ifMove(this._nextSquare.shape, this._nextSquare.squareCore, this._squares);
    }

    private clearGame() {
        for (const square of this._squares) {
            square.view?.hide();
        }
        this._squares = [];
        this._score = 0;
        this._nextSquare = randomTetris({x: 0, y: 0});
        this.againGetPoint(Options.WaitConfig.width, this._nextSquare);
        this._gameView.showNext(this._nextSquare);
        this._currentSquare = undefined;
        this.difficulty = DifficultyArr.level1;
    }

}