import React from 'react'
import { PieceState } from '../../types/enums'

interface Props {
    state: PieceState.empty | PieceState.red | PieceState.black
    onClick: () => void
}

const Component: React.FC<Props> = (props) => {

    
    return (
        <div
            className="piece-item"
            onClick={props.onClick}
        >
            <span
                className="piece"
                style={{
                    display: props.state === PieceState.empty ? 'none' : 'inline-block',
                    boxShadow: props.state === PieceState.red ? 'inset 0 0 15px 0 red, inset 0 0 20px 0 #EC7476' : 'inset 0 0 15px 0 #000, inset 0 0 20px 0 #777'
                }}
            ></span>
        </div>
    )
}

export default Component;