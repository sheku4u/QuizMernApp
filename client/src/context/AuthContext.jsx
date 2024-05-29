import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated:false,
    // setIsAuthenticated: ()=>{},
    // setUser: ()=>{},
    // setQuiz: ()=>{},
    // user:{},
    // quiz:[]

})

const AuthProvider = ({children})=>{
const [user,setUser] = useState({})
const [quiz,setQuiz] = useState([])
const [questions,setQuestions] = useState([])
const [result,setResult] = useState([])
const [trace,setTrace] = useState(0)
const [isAuthenticated,setIsAuthenticated] = useState(false)

const contextValue = {
    user,setUser,quiz,setQuiz,isAuthenticated, setIsAuthenticated,questions,setQuestions,result,setResult,trace,setTrace
}
return(
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthProvider
