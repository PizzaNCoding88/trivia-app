"use client";
import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useRouter } from "next/navigation";
import { Typography } from "@mui/material";

const QuizPage = () => {
  const { questions } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);

  let quiz = questions.results;
  const answers = [
    ...quiz[currentIndex].incorrect_answers,
    quiz[currentIndex].correct_answer,
  ];
  if (questions && questions.results && questions.results.length > 0) {
    let quiz = questions.results;
    console.log(quiz[currentIndex]);
    console.log(answers);
  } else {
    console.log("No data fetched");
  }

  return (
    <div>
      {questions && questions.results && questions.results.length > 0 ? (
        <Typography>{quiz[currentIndex].question}</Typography>
      ) : (
        <Typography>Error with fetching</Typography>
      )}
      {<div>Test</div>}
    </div>
  );
};

export default QuizPage;
