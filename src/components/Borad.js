import React, { useState } from 'react'
import { data } from '../constant/data'

function Borad(props) {
  const { category } = props
  const [articles, setArticles] = useState(data.filter(element => element.category === category))
  
  return (
    <>
      {articles.map(element => {
        return (
          <>
            <h3>{element.title}</h3>
            <p>{element.content}</p>
          </>
        )
      })}
    </>
  )
}

export default Borad
