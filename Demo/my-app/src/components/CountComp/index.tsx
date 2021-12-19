import React, { Component } from 'react'

interface Props {
    num: number
    onDecrease?: () => void
    onIncrease?: () => void
}

// const Component: React.FC<Props> = (props) => {

//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     props.onDecrease && props.onDecrease()
//                 }}
//             >-</button>
//             <h2>{props.num}</h2>
//             <button
//                 onClick={() => {
//                     props.onIncrease && props.onIncrease()
//                 }}
//             >+</button>
//         </div>
//     )
// }

// export default function CountComp(props: Props) {
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     props.onDecrease && props.onDecrease()
//                 }}
//             >-</button>
//             <h2>{props.num}</h2>
//             <button
//                 onClick={() => {
//                     props.onIncrease && props.onIncrease()
//                 }}
//             >+</button>
//         </div>
//     )
// }


// export default Component;

// 类组件

interface State {
    text: string
}

export default class index extends Component<Props, State> {
    
    state = {
        text: '数字:'
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.props.onDecrease && this.props.onDecrease()  
                    }}
                >-</button>
                <h2>{this.state.text}{this.props.num}</h2>
                <button
                    onClick={() => {
                        this.props.onIncrease && this.props.onIncrease()
                    }}
                >+</button>
            </div>
        )
    }
}
