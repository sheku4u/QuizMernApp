import React from 'react'
import {Link} from "react-router-dom"
import ResultTable from './ResultTable'
function Result() {
    const handleRestart = ()=>{
        console.log(`restart the game`)
    }
  return (
    <div className='container'>
        <h1 className='little text-light'>Quiz Application</h1>
        <div className='result flex-center'>
            <div className="flex">
                <span>Username</span>
            <span className='bold'>Abhishek</span>
            </div>
            <div className="flex">
                <span>Total Quiz Points : </span>
            <span className='bold'>50</span>
            </div>
            <div className="flex">
                <span>Total Questions</span>
            <span className='bold'>6</span>
            </div>
            <div className="flex">
                <span>Total Attempts </span>
            <span className='bold'>05</span>
            </div>
            <div className="flex">
                <span>Total Earn Points </span>
            <span className='bold'>30</span>
            </div>
            <div className="flex">
                <span>QUiz result</span>
            <span className='bold'>Passed</span>
            </div>
            

        </div>
    <div className='start'>
        <Link className='btn' to={'/quiz'} onClick={handleRestart}>Restart </Link>
    </div>
    <div className="container">
        <ResultTable />
    </div>
    </div>
  )
}

export default Result