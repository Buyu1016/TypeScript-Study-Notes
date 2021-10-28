import React, { PureComponent } from 'react'
import style from './index.less'

interface Props {
    num: number
    onChange?: (val: number) => void
}

// 函数组件两种写法
//  第一种
// export default function index(props: Props) {
//     return (
//         <div>
//             <button
//                 className={style.button}
//                 onClick={() => {
//                     props.onChange && props.onChange(-1)
//                 }}
//             >-</button>
//             <h1>{props.num}</h1>
//             <button
//                 className={style.button}
//                 onClick={() => {
//                     props.onChange && props.onChange(1)
//                 }}
//             >+</button>
//         </div>
//     )
// }

// 第二种

// const index: React.FC<Props> = (props) => {
//     return (
//         <div>
//             <button
//                 className={style.button}
//                 onClick={() => {
//                     props.onChange && props.onChange(-1)
//                 }}
//             >-</button>
//             <h1>{props.num}</h1>
//             <button
//                 className={style.button}
//                 onClick={() => {
//                     props.onChange && props.onChange(1)
//                 }}
//             >+</button>
//         </div>
//     )
// }

// export default index

// 类组件

interface States {
    msg: string
    level: string
}

export default class index extends PureComponent<Props, States> {
    // States这个泛型会控制state状态
    state = {
        msg: '芜湖',
        level: 'error',
        meta: '附带信息'
    }
    // 也可以直接 state: States = {}
    render() {
        return (
            <div>
                <button
                    className={style.button}
                    onClick={() => {
                        this.props.onChange && this.props.onChange(-1)
                    }}
                >
                    -
                </button>
                <h1>{this.props.num}</h1>
                <button
                    className={style.button}
                    onClick={() => {
                        this.props.onChange && this.props.onChange(1)
                    }}
                >
                    +
                </button>
            </div>
        )
    }
}

