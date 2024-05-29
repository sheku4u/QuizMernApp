import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const QuizContext = createContext({
  quizData: null,
  setQuizData: (data) => {},
  currentQuestion: 0,
  setCurrentQuestion: (index) => {},
  userAnswers: {},
  setUserAnswers: (answer) => {},
  totalQuestions: 0,
  setTotalQuestions: (count) => {},
  isQuizCompleted: false,
  setIsQuizCompleted: (completed) => {},
  questionImpression: {},
  setQuestionImpression: (impression) => {},
  quizImpression: 0,
  totalQuizData:0,
  setQuizImpression: (impresssion) => {},
  isError:false,
  errorMessage: "",
  setError: (message)=>{},
  quizName:"",
  setQuizName: ()=>{},
  quizType:"",
  setQuizType:()=>{}
});

const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [quizImpression, setQuizImpression] = useState(0);
  const [questionImpression, setQuestionImpression] = useState({});
  const [isError,setIsError] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const [quizName,setQuizName] = useState("")
  const [quizType,setQuizType] = useState("")

  useEffect(() => {
    try {
      const fetchQuizData = async () => {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/quiz/all",
          { withCredentials: true }
        );
        
        setQuizData(data);
        console.log("quizData: ", quizData);
        console.log("data: ", data);
      };
      fetchQuizData();
    } catch (error) {
        setIsError(true)
        setErrorMessage("error in fetching data")
      console.error(`error in fetching data from backend : ${error}`);
    }
  }, [quizName]);


  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: answer });
  };
  const handleQuizComplete = () => {
    setIsQuizCompleted(true);
    // calcute and update quiz and quesitons impressions here
  };
  const totalQuizData = quizData?.allQuiz.length

  const contextValue = {
    quizData,
    setQuizData,
    currentQuestion,
    setCurrentQuestion,
    userAnswers,
    setUserAnswers,
    totalQuestions,
    setTotalQuestions,
    isQuizCompleted,
    setIsQuizCompleted,
    quizImpression,
    setQuizImpression,
    questionImpression,
    setQuestionImpression,
    handleAnswerChange,
    handleQuizComplete,
    isError,
    errorMessage,
    setIsError,totalQuizData,
    setQuizName,
    quizName,
    setQuizType,
    quizType

  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};

export default QuizProvider;
