import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useFetchQuestions } from '../../hooks/fetchQuestions'
import data from '../../database/sampleData'
function Question() {
    const {questions,trace,result} = useContext(AuthContext)
    const [{isLoading,apiData,serverError}] = useFetchQuestions()
    const [checked , setChecked]  = useState(undefined)
    const onSelect=(i)=>{
        // onChecked(i)
        setChecked(i)

    }
    const question = data
    // useEffect(()=>{

    // },{checked})
    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "unknown error"}</h3>
  return (
    <div className='questions'>
        <h2 className='terxt-light'>{question.question}</h2>
<ul key={question.id}>
    {
        question.options.map((option,index)=>(
            <li key={index}>
        <input type="radio" value={false} name="options" id={`q${index}-option`} onChange={onSelect()} />
        <label htmlFor={`q${index}-option`} className='text-primary'>{option}</label>
        <div className='check '></div>
    </li>

))
    }

    
</ul>
    </div>
  )
}

export default Question