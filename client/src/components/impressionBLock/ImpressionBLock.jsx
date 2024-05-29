import React ,{useContext}from 'react'
import { QuizContext } from '../../context/QuizContext'
import {Box} from '../index' 
function ImpressionBLock() {
  const {totalQuestions,totalQuizData,quizImpression} = useContext(QuizContext)

  return (
    <div>
      <Box totalNumber={totalQuizData} text={"Quiz Created"} color={"#FF5D01"} />
      <Box totalNumber={totalQuestions} text={"Questions Created"} color={"#60B84B"} />
      <Box totalNumber={quizImpression} text={"Total Impressions"} color={"#5076FF"} />

        {/* show total impressions so the  */}
        
    </div>
  )
}

export default ImpressionBLock