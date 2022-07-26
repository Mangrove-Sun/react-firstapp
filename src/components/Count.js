import React, { useState } from 'react'

function Count() {
  // const [변수명, set변수명] = useState(변수의 초기값)
  const [test, setTest] = useState(0)
  
  const countUp = () => {
    setTest(test + 1)
  }
  const countDown = () => {
    setTest(test - 1)
  }
  return (
    <div>
      {test}
      <button onClick={countUp}>카운트 업</button>
      <button onClick={countDown}>카운트 다운</button>
    </div>
  )
}

export default Count
