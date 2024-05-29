import { useEffect,useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
export const useFetchQuestions = ()=>{
    const {setQuestions} = useContext(AuthContext)
    const [getData,setGetData] = useState({isLoading: false, apiData: [],serverErorr:null })
    useEffect(()=>{
            // geting fetch data
        setGetData(prev => ({...prev,isLoading: true}))
    
        (async()=>{
            try {
                let questionData = await fetch("")
                if(questionData.length > 0){
                    setGetData(prev =>({...prev,apiData:questionData}))
                    setQuestions(questionData)
                }else{
                    console.log("no question is available")
                }
            } catch (error) {
                setGetData(prev => ({...prev,isLoading: false}))
                setGetData(prev => ({...prev,serverErorr: error}))
            }
        })()
    },[setQuestions])
    return [getData,setGetData]
}
