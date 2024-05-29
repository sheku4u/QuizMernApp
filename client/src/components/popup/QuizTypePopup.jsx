import React,{useContext} from "react";
import { QuizContext } from "../../context/QuizContext";
import { Link } from "react-router-dom";
function QuizTypePopup({ onClose,onOpen }) {
  const {quizType,quizName,setQuizName,setQuizType} = useContext(QuizContext)
  return (
    <div>
      <input type="text" placeholder="Quiz Name" value={quizName} onChange={(e)=> setQuizName(e.target.value)} />
      <div>
        <label htmlFor="quizType"> type</label>
        <input type="button" value="Q & A" onClick={(e)=> setQuizType(e.target.value)} />
        <input type="button" value="Poll " onClick={(e)=> setQuizType(e.target.value)} />

      </div>

      <div>
        {/* <Link to={'/dashboard'}> */}
        <button onClick={onClose} >Cancel</button>
        {/* </Link> */}
        
        <button onClick={onOpen}>Continue</button>
        
        
      </div>
    </div>
  );
}

export default QuizTypePopup;
