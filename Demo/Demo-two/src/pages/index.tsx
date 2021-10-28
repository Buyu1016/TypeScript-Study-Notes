import Demo from '@/components/Demo'
import React, { useState } from 'react'

export default function IndexPage() {

  const [Num, setNum] = useState(0)

  return (
    <div>
      <h1>Hello React+Ts</h1>
      <Demo
        num={Num}
        onChange={(val) => {
          setNum(Num + val)
        }}
      />
    </div>
  );
}
