import React, { useState } from 'react'
import moment from 'moment-timezone'

function UserClock() {
  const [times, setTime] = useState([{id:1, tz:'Asia/Seoul'},{id:2, tz:'Asia/Taipei'}, {id:3, tz:'US/Pacific'}])
  const timeFilter = (tz) => {
    setTime(times.filter(time => time.tz !== tz))
  }

  return (
    <div>
      {times.map(time => {
        return (
          <>
            <h1>{time.tz}의 현재 시간</h1>
            <h2>{moment().tz(time.tz).format('YYYY-MM-DD HH:mm:ss')}</h2>
            <button onClick={() => timeFilter(time.tz)}>제거하기</button>
          </>
        )
      })}
    </div>
  )
}

export default UserClock
