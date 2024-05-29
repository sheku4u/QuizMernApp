import React from 'react'
import DsiplayQuiz from '../displayQuiz/DsiplayQuiz'
import { ImpressionBLock,TrendingQuizSection } from '../../components'
function Dashboard() {
  
  return (
    <div>
        Dashboard
        <div>
            <DsiplayQuiz />
            <ImpressionBLock />
            <TrendingQuizSection />

        </div>
{/* 
total no. of quizes
total no. of questions in all quiz
total no. of impressions 
[1 component displayTotalData]

trending quiz (block)
trending quiz ke cards upto 12 
 */}
    </div>
  )
}

export default Dashboard