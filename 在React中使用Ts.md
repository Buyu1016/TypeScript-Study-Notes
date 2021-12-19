# 在React中使用Typescript

首先需要搭建一个React+Typescript工程, 使用**create-react-app**脚手架方便的进行搭建工程

> create-react-app 项目名 --template typescript

### 在类组件内使用Typescript

```ts
import React, { Component } from 'react';

// 规定props
interface Props {
    num: number
    onChange?: (val: number) => void
}

// 规定state
interface State {
    text: string
}

class CountComp extends Component<Props, State> {

    // 如果使用了constructor的写法
    // 需要再次单独规定一下props
    // constructor(props: Props) {
    //     super(props);
    //     this.state = {
    //         text: '数字:'
    //     }
    // }

    state = {
        text: '数字:'
    }

    render() {
            return (
                <div>
                    <button
                        onClick={() => {
                            this.props.onChange && this.props.onChange(-1);
                        }}
                    >
                        -
                    </button>
                    <h2>
                        {this.state.text}{this.props.num}
                    </h2>
                    <button
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

```

### 在函数组件内使用Typescript

**第一种方式**

```ts
import React from 'react';

interface Props {
    num: number
    onDecrease?: () => void
    onIncrease?: () => void
}

const Component: React.FC<Props> = (props) => {

    return (
        <div>
            <button
                onClick={() => {
                    props.onDecrease && props.onDecrease()
                }}
            >-</button>
            <h2>{props.num}</h2>
            <button
                onClick={() => {
                    props.onIncrease && props.onIncrease()
                }}
            >+</button>
        </div>
    )
}
```

**第二种方式**

```ts
import React from 'react';

interface Props {
    num: number
    onDecrease?: () => void
    onIncrease?: () => void
}

export default function CountComp(props: Props) {
    return (
        <div>
            <button
                onClick={() => {
                    props.onDecrease && props.onDecrease()
                }}
            >-</button>
            <h2>{props.num}</h2>
            <button
                onClick={() => {
                    props.onIncrease && props.onIncrease()
                }}
            >+</button>
        </div>
    )
}
```

函数组件两种方式的区别: 第一种方式props内会自带一个可选的children使用, 第二种方式则没有children

### 抽离类型

一般会在/项目/src下创建types文件夹, 其下存放抽离的接口/枚举等等 

``` 未完待续... ```
