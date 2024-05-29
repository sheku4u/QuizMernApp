import React from 'react'

function Box({text,totalNumber,color}) {
  return (
    <div style={{display:"flex",flexWrap:"wrap",color:{color}}}>
<span>{totalNumber}</span>
<h2>{text}</h2>
    </div>
  )
}

export default Box