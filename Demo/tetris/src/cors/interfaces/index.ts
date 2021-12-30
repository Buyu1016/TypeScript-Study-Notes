import SquareGroup from "../SquareGroup";

export interface IPoint {
    x: number
    y: number
}

export interface IViews {
    show(): void
    hide(): void
}

export type IPoints = IPoint[];

export enum SquareDirection {
    left,
    right,
    down,
    up
}

export enum GameState {
    notPlay,
    playing,
    pause,
    end
}

export interface IGameViews {
    showNext(tetris: SquareGroup): void
    switch(tetris: SquareGroup): void
    showScore(text: number): void
    showDifficulty(text: string): void
}

export enum DifficultyArr {
    "level1" = 1000,
    "level2" = 800,
    "level3" = 500,
    "level4" = 200,
    "level5" = 100
}