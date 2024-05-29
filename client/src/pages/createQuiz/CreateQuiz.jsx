import React,{useState} from 'react'
import { QuizTypePopup } from '../../components'
import { Navigate ,useNavigate} from 'react-router-dom'
function CreateQuiz() {
const navigateTo = useNavigate()
  const [showPopup,setShowPopup] = useState(true)
const onCloseFunction = ()=>{
  setShowPopup(true)
  navigateTo('/dashboard')
}
const onOpen = ()=>{
  setShowPopup(false)
  navigateTo("/create")

}
  return (
    <div>
      CreateQuiz
      {/* pop up to show for quiz type */}
      {/* create page  */}
      {showPopup && <QuizTypePopup onClose={onCloseFunction} onOpen={onOpen} />}

    </div>
  )
}

export default CreateQuiz