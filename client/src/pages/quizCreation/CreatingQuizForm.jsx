import React,{useState,useContext,useEffect} from 'react'
import QuizForm from '../quizForm/QuizForm'
import QuestionTypeOption from '../quizForm/QuestionTypeOption'
function CreatingQuizForm() {
    const [isFormOpen,setIsFormOpen] = useState(false)
const [btnNumber,setBtnNumber] = useState(1)

const toggleForm = () =>{
    setIsFormOpen(!isFormOpen)
  }
    
  return (
    <div>CreatingQuizForm

        {/* btn group */}
      <h3>Max 5 are allowed</h3>
      
      {/* option type by radio */}
      {/* <QuestionTypeOption /> */}
      <QuizForm />
      {/* radio bt n m text field */}
      {/* delete btn */}
      {/* timer  */}
      {/* cancel or create QUiz app */}
      
      <button onChange={(e)=> setBtnNumber(e.target.value + 1)} onClick={toggleForm} value={1}>{btnNumber}</button>
      {isFormOpen && <QuizForm onClose={toggleForm} />}
    </div>
    
  )
}

export default CreatingQuizForm