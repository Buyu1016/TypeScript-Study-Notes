import React, { useState } from 'react'
import CheckerboardComp from '../CheckerboardComp'
import { GameState, PieceState } from '../../types/enums'

const Component: React.FC = () => {
    // 落子的状态
    const [state, setState] = useState<PieceState.red | PieceState.black>(PieceState.red);
    const [ifAgain, setIfAgain] = useState(false)
    // 游戏状态
    const [gameState, setGameState] = useState<GameState>(GameState.playing)

    return (
        <div className="game-container">
            <h1
                className="game-title"
                style={{
                    display: gameState === GameState.playing ? 'inline-block' : 'none'
                }}
            >
                { state === PieceState.black ? "黑" : "红" }方请落棋
            </h1>
            <h1
                className="game-title"
                style={{
                    display: gameState === GameState.playing ? 'none' : 'inline-block'
                }}
            >
                { gameState === GameState.redWin ? '红方胜利!' : gameState === GameState.blackWin ? '黑方胜利!' : '双方平局!'}
            </h1>
            <CheckerboardComp
                size={3}
                state={state}
                ifAgain={ifAgain}
                gameState={gameState}
                onChange={() => {
                    if (state === PieceState.black) {
                        setState(PieceState.red);
                    } else {
                        setState(PieceState.black);
                    }
                }}
                onChangeGameState={(state) => {
                    setGameState(state);
                }}
            />
            <p className="game-button-container">
                <button
                    className="game-again-button"
                    onClick={() => {
                        setState(PieceState.red);
                        setIfAgain(!ifAgain);
                    }}
                >重新开始</button>
            </p>
        </div>
    )
}

export default Component;