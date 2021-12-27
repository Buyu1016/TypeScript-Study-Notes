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