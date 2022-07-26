import React from 'react'

function First({ name, number }) {
  return (
    <div>이름은 { name }, 숫자는 { number }</div>
  )
}

export default First // 누군가가 볼려고 할 때, 접근하면 First()라는 내용을 제공해줘라 내보래줘라 라는 코드
