import $ from 'jquery';
import Square from '../Square'

export function operation(square: Square) {
    $(".btn-up").click(() => {
        square.point = {
            x: square.point.x,
            y: square.point.y - 1
        }
    })
    $(".btn-down").click(() => {
        square.point = {
            x: square.point.x,
            y: square.point.y + 1
        }
    })
    $(".btn-left").click(() => {
        square.point = {
            x: square.point.x - 1,
            y: square.point.y
        }
    })
    $(".btn-right").click(() => {
        square.point = {
            x: square.point.x + 1,
            y: square.point.y
        }
    })
    $(".btn-remove").click(() => {
        square.view?.hide()
    })
}