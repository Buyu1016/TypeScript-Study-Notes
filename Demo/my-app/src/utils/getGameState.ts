import { GameState, PieceState } from '../types/enums'

/**
 * 此处算法只针对于3x3尺寸游戏
 * @param data 
 * @param index 
 * @param gameState 
 * @param size 
 * @returns 
 */
const getGameState = (data: PieceState[], index: number, gameState: GameState, size: number): GameState => {
    // 当前对局已经处于结束状态(任何一方已经胜利/平局)
    // 继续沿用之前的状态
    if (gameState === GameState.redWin || gameState === GameState.blackWin || gameState === GameState.draw) {
        return gameState;
    }
    // 当前对局处于进行状态则需要进行判断是否任何一方胜利或者继续进行或者平局
    // 判断落棋点的横向是否满足三个同色棋在一起的条件
    const xMin = Math.floor(index / 3) * size;
    // 判断落棋点的纵向是否满足三个同色在一起的条件
    const yMin = index % size;
    if ((data[xMin] === data[xMin + 1] && data[xMin + 2] === data[xMin])
        || (data[yMin] === data[yMin + size] && data[yMin + size * 2] === data[yMin])
    ) { // 横向满足胜利条件
        // 根据落棋点棋子判定哪方胜利
        if (data[index] === PieceState.red) {
            return GameState.redWin;
        } else if(data[index] === PieceState.black) {
            return GameState.blackWin;
        }
    }
    // 判断落棋点的斜向是否的满足三个同色在一起的条件
    // 在3x3的尺寸棋盘内只有在中心点才能够斜向满足条件
    if (!(index%2)) {
        if ((data[0] === data[4] && data[8] === data[0]) || (data[4] === data[2] && data[6] === data[4])) {
            // 根据落棋点棋子判定哪方胜利
            if (data[4] === PieceState.red) {
                return GameState.redWin;
            } else if(data[4] === PieceState.black) {
                return GameState.blackWin;
            }
        }
    }
    // 判断当前是否平局
    if(!data.includes(PieceState.empty)) {
        return GameState.draw;
    }
    return GameState.playing;
}

export default getGameState;
