"use client";
import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useRouter } from "next/navigation";
import { Button, Typography, ButtonGroup } from "@mui/material";
import { shuffleArray } from "../utils/shuffleArray";
import styles from "./page.module.css";

const QuizPage = () => {
  const { questions } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (questions && questions.results && questions.results.length > 0) {
    let quiz = questions.results;
    const answers = [
      ...quiz[currentIndex].incorrect_answers,
      quiz[currentIndex].correct_answer,
    ];
    console.log(quiz[currentIndex]);
    console.log(answers);
    const shuffledAnswers = shuffleArray(answers);
    return (
      <div className={styles.container}>
        <Typography>{quiz[currentIndex].question}</Typography>
        <ButtonGroup
          sx={{
            display: "grid",
            gridTemplateColumns: "200px 200px",
            gap: "1rem",
          }}
        >
          {shuffledAnswers.map((answer, i) => (
            <Button
              key={i}
              variant="contained"
              sx={{ borderRadius: "4px !important" }}
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
