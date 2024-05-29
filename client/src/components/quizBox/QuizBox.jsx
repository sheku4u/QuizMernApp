import React from 'react'
import eyeIcon from '../../assets/eye.png'
function QuizBox({quizName,quizImpressions,createdAt}) {
  return (
    <div style={{display:"flex",flexWrap:"wrap",width:"180px",height:"60px",backgroundColor:"rose"}}>
      {/* quiz name, impressions,  created at */}
<p>{quizName}</p>
{quizImpressions}<img src={eyeIcon} />
<p>Created on : {createdAt}</p>
    </div>
  )
}

export default QuizBox