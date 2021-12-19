import React, { useState, useEffect } from 'react'
import PieceComp from '../PieceComp'
import computedSize from '../../utils/computedSize'
import { GameState, PieceState } from '../../types/enums'
import getGameState from '../../utils/getGameState'

interface Props {
    size: number
    state: PieceState.red | PieceState.black
    onChange: () => void
    ifAgain?: boolean
    gameState: GameState
    onChangeGameState: (gameState: GameState) => void
}

const Component: React.FC<Props> = (props) => {

    let [boardData, setBoardData] = useState(computedSize(props.size, computedSize(props.size,PieceState.empty)));
    const vNode = boardData.flat().map((item: PieceState, index: number) => {
        return (
            <PieceComp
                state={item}
                key={index}
                onClick={() => {
                    const x: number = index % props.size;
                    const y: number = ( index - x ) / props.size;
                    if (props.gameState === GameState.redWin || props.gameState === GameState.blackWin || props.gameState === GameState.draw) return;
                    if (boardData[y][x] !== PieceState.empty) return
                    boardData[y][x] = props.state;
                    const result = getGameState(boardData.flat(), index, props.gameState, props.size);
                    props.onChangeGameState(result);
                    props.onChange();
                }}
            />
        )
    });

    useEffect(() => {
        setBoardData(computedSize(props.size, computedSize(props.size, PieceState.empty)));
        props.onChangeGameState(GameState.playing);
    }, [props.ifAgain])
    
    return (
        <div
            className="checkerboard-container"
            style={{
                width: props.size * 70 + "px",
                height: props.size * 70 + "px"
            }}
        >
            { vNode }
        </div>
    )
}

export default Component;