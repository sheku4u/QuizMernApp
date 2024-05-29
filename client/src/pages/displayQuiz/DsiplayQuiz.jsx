import React,{useContext,useState} from 'react'
import { QuizContext } from '../../context/QuizContext'


function DsiplayQuiz() {
    const {quizData } = useContext(QuizContext)

  return (
    <div>DsiplayQuiz
        <div>
            {console.log(quizData)}
        </div>
    </div>
  )
}

export default DsiplayQuiz