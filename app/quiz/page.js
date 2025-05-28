"use client";
import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useRouter } from "next/navigation";
import { Button, Typography, ButtonGroup } from "@mui/material";
import { shuffleArray } from "../utils/shuffleArray";
import styles from "./page.module.css";
import { decodeHtml } from "../utils/decodeHTML";

const QuizPage = () => {
  const { questions } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (questions && questions.results && questions.results.length > 0) {
    let quiz = questions.results;
    const answers = [
      ...quiz[currentIndex].incorrect_answers,
      quiz[currentIndex].correct_answer,
    ];

    console.log(questions.results[currentIndex].correct_answer);

    const shuffledAnswers = shuffleArray(answers);

    function handleAnswer(i) {
      if (shuffledAnswers[i] === quiz[currentIndex].correct_answer) {
        setCurrentIndex(currentIndex + 1);
        console.log(currentIndex);
      }
    }

    return (
      <div className={styles.container}>
        <Typography>{decodeHtml(quiz[currentIndex].question)}</Typography>
        <ButtonGroup
          sx={{
            display: "grid",
            gridTemplateColumns: "40vw 40vw",
            gap: "1rem",
          }}
        >
          {shuffledAnswers.map((answer, i) => (
            <Button
              key={i}
              variant="contained"
              sx={{ borderRadius: "4px !important" }}
              onClick={() => handleAnswer(i)}
            >
              {answer}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
};

export default QuizPage;
