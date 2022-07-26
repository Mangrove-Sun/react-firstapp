import React from 'react'

function Intro({name, age, comment}) {
  return (
    <div>
    <p>{comment}</p>
    <p>제 이름은 {name}이고</p>
    <p>나이는 {age}입니다.</p>
    </div>
  )
}

export default Intro
