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
}