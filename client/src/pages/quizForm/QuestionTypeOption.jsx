import React from 'react'

function QuestionTypeOption({onselect}) {
    const question = {
        text:'',
        imageUrl: "",
        type:["text","imageUrl","textAndImageUrl"],
        option:[]
    }
  return (
    <div>
        <input type="radio" id='text' name="questionType" value="text" onChange={()=> onselect('text')} />
        <input type="radio" id='imageUrl' name="questionType" value="imageUrl" onChange={()=> onselect('imageUrl')} />
        <input type="radio" id='textAndImageUrl' name="questionType" value="textAndImageUrl" onChange={()=> onselect('textAndImageUrl')} />
    </div>
  )
}

export default QuestionTypeOption