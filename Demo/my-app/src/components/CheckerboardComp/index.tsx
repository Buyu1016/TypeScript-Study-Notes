import React, { useState } from 'react'
import PieceComp from '../PieceComp'
import computedSize from '../../utils/computedSize'

interface Props {
    size: number
    state: "red" | "black"
    onChange: () => void
}

const Component: React.FC<Props> = (props) => {
    const [lock, setLock] = useState(false);
    let [boardData, setBoardData] = useState(computedSize(props.size, computedSize(props.size, "empty")));
    const vNode = boardData.flat().map((item: 'empty' | 'red' | 'black', index: number) => {
        return (
            <PieceComp
                state={item}
                key={index}
                onClick={() => {
                    let x = index % props.size;
                    let y = ( index - x ) / props.size;
                    if (boardData[y][x] !== 'empty') return
                    boardData[y][x] = props.state;
                    setLock(!lock);
                    props.onChange();
                }}
            />
        )
    });
    
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