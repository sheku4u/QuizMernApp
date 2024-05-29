
import {Question} from '../index'

function Quiz() {

    const handleNextBtn = ()=>{console.log('next')}
    const handlePrevBtn = ()=>{console.log('prev')}
  return (
    <div>
        <h1>Quiz Heading</h1>
        {/* display questions */}
        <Question />
        <div>
            <button onClick={handlePrevBtn}>Prev</button>
            <button onClick={handleNextBtn}>Next</button>
        </div>
    </div>
  )
}

export default Quiz