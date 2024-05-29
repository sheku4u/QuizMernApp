import React, { useState, useContext, useEffect } from "react";
import QuestionTypeOption from "./QuestionTypeOption";
import { QuizContext } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QuizForm() {
  const { quizType, quizName, setQuizName, setQuizType } = useContext(QuizContext);
  const navigateTo = useNavigate()
  //   const [questions,setQuestions] = useState([])
  //   const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)
  // const [timeEnabled,setTimeEnabled] = useState(false)
  // const [timeValue,setTimeValue] = useState(0)
  const [questionText, setQuestionText] = useState("");
  // const [optionOne, setOptionOne] = useState("");
  // const [optionTwo, setOptionTwo] = useState("");
  // const [optionThree, setOptionThree] = useState("");
  // const [optionFour, setOptionFour] = useState("");
  // const [imageUrlOne, setImageUrlOne] = useState("");
  // const [imageUrlTwo, setImageUrlTwo] = useState("");
  // const [imageUrlThree, setImageUrlThree] = useState("");
  // const [imageUrlFour, setImageUrlFour] = useState("");
  // const [pollOptionOne, setPollOptionOne] = useState("");
  // const [pollOptionTwo, setPollOptionTwo] = useState("");
  // const [pollOptionThree, setPollOptionThree] = useState("");
  // const [pollOptionFour, setPollOptionFour] = useState("");
  const [correctOption, setCorrectOption] = useState(0);
  const [optionType, setOptionType] = useState("");
  const [questionImpression, setQuestionImpression] = useState(0);
  const [quizImpression, setQuizImpression] = useState(0);

  const [textOptions, setTextOptions] = useState({
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
  });
  const [imageUrlOptions, setImageUrlOptions] = useState({
    imageUrlOne: "",
    imageUrlTwo: "",
    imageUrlThree: "",
    imageUrlFour: "",
  });

  const quizData = {
    quizName: quizName,
    optionType: optionType,
    quizImpression: quizImpression,
    quizType: quizType,
    questions: [
      {
        questionText: questionText,
        options: {
          ...textOptions,
          ...imageUrlOptions,
        },
        // options:{
        //   optionOne:optionOne,
        //   optionTwo:optionTwo,
        //   optionThree:optionThree,
        //   optionFour:optionFour,
        //   imageUrlOne:imageUrlOne,
        //   imageUrlTwo:imageUrlTwo,
        //   imageUrlThree:imageUrlThree,
        //   imageUrlFour:imageUrlFour,
        //   pollOptionOne:pollOptionOne,
        //   pollOptionTwo:pollOptionTwo,
        //   pollOptionThree:pollOptionThree,
        //   pollOptionFour:pollOptionFour
        // },
        correctOption: correctOption,
        questionImpression: questionImpression,
      },
    ],
  };
  const handleTextOptionChange = (event, optionIndex) => {
    setTextOptions({
      ...textOptions,
      [optionIndex]: event.target.value,
    });
  };
  const handleImageUrlOptionChange = (event, optionIndex) => {
    setImageUrlOptions({
      ...imageUrlOptions,
      [optionIndex]: event.target.value,
    });
  };

  const handleQuizForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/quiz/createQuiz",
        quizData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setQuizName("");
      setQuizType("")
      setQuestionText("")
      setCorrectOption(0)
      setOptionType("")
      setQuestionImpression(0)
      setQuizImpression(0)
      setTextOptions({
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
      });
      setImageUrlOptions({
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
      });
      navigateTo('/dashboard')

    } catch (error) {
      console.log("err in sending data form fornend to backend", error);
      console.log(`optionTpye: ${optionType}, questions : ${quizData.questions}, quizType: ${quizType}`)
    }
  };

  return (
    <div>
      {/* <QuestionTypeOption /> */}
      <form onSubmit={handleQuizForm}>
        <input
          type="text"
          placeholder="Q & A Question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <div>
          <input
            type="radio"
            id="optionTypeText"
            name="optionType"
            value="Text"
            onChange={(e) => setOptionType(e.target.value)}
          />
          <label htmlFor="optionTypeText">Text</label>
          <input
            type="radio"
            id="optionTypeImage"
            name="optionType"
            value="ImageURL"
            onChange={(e) => setOptionType(e.target.value)}
          />
          <label htmlFor="optionTypeImage">Image</label>
          <input
            type="radio"
            id="optionTypeTextAndImage"
            name="optionType"
            value="TextAndImageURL"
            onChange={(e) => setOptionType(e.target.value)}
          />
          <label htmlFor="optionTypeImage">Text & Image</label>
        </div>

        {optionType === "Text" && (
          <>
            <input
              type="text"
              id="optionOne"
              value={textOptions.optionOne}
              onChange={(e) => handleTextOptionChange(e, "optionOne")}
              placeholder="Text"
            />
            <input
              type="text"
              id="optionTwo"
              value={textOptions.optionTwo}
              onChange={(e) => handleTextOptionChange(e, "optionTwo")}
              placeholder="Text"
            />
            <input
              type="text"
              id="optionThree"
              value={textOptions.optionThree}
              onChange={(e) => handleTextOptionChange(e, "optionThree")}
              placeholder="Text"
            />
            <input
              type="text"
              id="optionFour"
              value={textOptions.optionFour}
              onChange={(e) => handleTextOptionChange(e, "optionFour")}
              placeholder="Text"
            />
          </>
        )}
        {optionType === "ImageURL" && (
          <>
            <input
              type="text"
              id="optionOne"
              value={imageUrlOptions.optionOne}
              onChange={(e) => handleImageUrlOptionChange(e, "optionOne")}
              placeholder="Image URL"
            />
            <input
              type="text"
              id="optionTwo"
              value={imageUrlOptions.optionTwo}
              onChange={(e) => handleImageUrlOptionChange(e, "optionTwo")}
              placeholder="Image URL"
            />
            <input
              type="text"
              id="optionThree"
              value={imageUrlOptions.optionThree}
              onChange={(e) => handleImageUrlOptionChange(e, "optionThree")}
              placeholder="Image URL"
            />
            <input
              type="text"
              id="optionFour"
              value={imageUrlOptions.optionFour}
              onChange={(e) => handleImageUrlOptionChange(e, "optionFour")}
              placeholder="Image URL"
            />
          </>
        )}
        {optionType === "TextAndImageURL" && (
          <>
            <div>
              <input
                type="text"
                id="optionOne"
                value={textOptions.optionOne}
                onChange={(e) => handleTextOptionChange(e, "optionOne")}
                placeholder="Text"
              />
              <input
                type="text"
                id="optionTwo"
                value={textOptions.optionTwo}
                onChange={(e) => handleTextOptionChange(e, "optionTwo")}
                placeholder="Text"
              />
              <input
                type="text"
                id="optionThree"
                value={textOptions.optionThree}
                onChange={(e) => handleTextOptionChange(e, "optionThree")}
                placeholder="Text"
              />
              <input
                type="text"
                id="optionFour"
                value={textOptions.optionFour}
                onChange={(e) => handleTextOptionChange(e, "optionFour")}
                placeholder="Text"
              />
            </div>
            <div>
              <input
                type="text"
                id="optionOne"
                value={imageUrlOptions.optionOne}
                onChange={(e) => handleImageUrlOptionChange(e, "optionOne")}
                placeholder="Image URL"
              />
              <input
                type="text"
                id="optionTwo"
                value={imageUrlOptions.optionTwo}
                onChange={(e) => handleImageUrlOptionChange(e, "optionTwo")}
                placeholder="Image URL"
              />
              <input
                type="text"
                id="optionThree"
                value={imageUrlOptions.optionThree}
                onChange={(e) => handleImageUrlOptionChange(e, "optionThree")}
                placeholder="Image URL"
              />
              <input
                type="text"
                id="optionFour"
                value={imageUrlOptions.optionFour}
                onChange={(e) => handleImageUrlOptionChange(e, "optionFour")}
                placeholder="Image URL"
              />
            </div>
          </>
        )}

        {/* <input type="radio" name='optionText'  > <input type="text" id="optionOne" value={optionOne} onChange={(e)=> setOptionOne(e.target.value)}  placeholder='Text'  /> </input>
        <input type="radio" name='optionText'  > <input type="text" id="optionTwo" value={optionTwo} onChange={(e)=> setOptionTwo(e.target.value)}  placeholder='Text' /> </input>
        <input type="radio" name='optionText'  > <input type="text" id="optionThree" value={optionThree} onChange={(e)=> setOptionThree(e.target.value)} placeholder='Text'  /> </input>
        <input type="radio" name='optionText'  > <input type="text" id="optionFour" value={optionFour} onChange={(e)=> setOptionFour(e.target.value)} placeholder='Text'  /> </input>

        <input type="radio" name='optionImage'  > <input type="text" id="imageUrlOne" value={imageUrlOne} onChange={(e)=> setImageUrlOne(e.target.value)}  placeholder='Image Url' /> </input>
        <input type="radio" name='optionImage'  > <input type="text" id="imageUrlTwo" value={imageUrlTwo} onChange={(e)=> setImageUrlTwo(e.target.value)}  placeholder='Image Url' /> </input>
        <input type="radio" name='optionImage'  > <input type="text" id="imageUrlThree" value={imageUrlThree} onChange={(e)=> setImageUrlThree(e.target.value)} placeholder='Image Url'  /> </input>
        <input type="radio" name='optionImage'  > <input type="text" id="imageUrlFour" value={imageUrlFour} onChange={(e)=> setImageUrlFour(e.target.value)} placeholder='Image Url'  /> </input>

        <input type="radio" name='pollOption'  > <input type="text" id="pollOptionOne" value={pollOptionOne} onChange={(e)=> setPollOptionOne(e.target.value)} placeholder='poll' /> </input>
        <input type="radio" name='pollOption'  > <input type="text" id="pollOptionTwo" value={pollOptionTwo} onChange={(e)=> setPollOptionTwo(e.target.value)} placeholder='poll' /> </input>
        <input type="radio" name='pollOption'  > <input type="text" id="pollOptionThree" value={pollOptionThree} onChange={(e)=> setPollOptionThree(e.target.value)} placeholder='poll' /> </input>
        <input type="radio" name='pollOption'  > <input type="text" id="pollOptionFour" value={pollOptionFour} onChange={(e)=> setPollOptionFour(e.target.value)} placeholder='poll' /> </input> */}

        <div>
          <button>Cancel</button>
          <button type="submit">Create Quiz</button>
        </div>
      </form>
    </div>
  );
}

export default QuizForm;
