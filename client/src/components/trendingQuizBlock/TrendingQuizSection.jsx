import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import { Link } from "react-router-dom";
import { QuizBox } from "../index";

function TrendingQuizSection() {
  const { quizData, isError, errorMessage } = useContext(QuizContext);
  const trendingQuiz = quizData?.allQuiz.slice(0, 12);
  console.log(trendingQuiz);
  return (
    <div>
      <h1>Trending Quiz</h1>
      <section>
        {isError ? (
          <p>{errorMessage}</p>
        ) : quizData ? (
          <ul>
            {trendingQuiz.map((quiz) => (
              <QuizBox
                key={quiz._id}
                quizImpressions={quiz.quizImpression}
                quizName={quiz.quizName}
                createdAt={quiz.createdAt.slice(0, 10)}
              />
            ))}
          </ul>
        ) : (
          <p>Loading Quiz..</p>
        )}
      </section>
    </div>
  );
}

export default TrendingQuizSection;
