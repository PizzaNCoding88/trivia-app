"use client";
import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { Button, Typography, ButtonGroup, Box } from "@mui/material";
import { shuffleArray } from "../utils/shuffleArray";
import styles from "./page.module.css";
import { decodeHtml } from "../utils/decodeHTML";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Wrong from "../wrong/wrong";

const QuizPage = () => {
  const { questions } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  if (questions && questions.results && questions.results.length > 0) {
    let quiz = questions.results;
    const answers = [
      ...quiz[currentIndex].incorrect_answers,
      quiz[currentIndex].correct_answer,
    ];

    // console.log(questions.results[currentIndex].correct_answer);
    console.log(questions.results[currentIndex]);
    // console.log(questions.results);

    const shuffledAnswers = shuffleArray(answers);

    function handleAnswer(i) {
      if (shuffledAnswers[i] === quiz[currentIndex].correct_answer) {
        if (currentIndex + 1 >= quiz.length) {
          setIsFinished(true);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        setWrongAnswer(true);
      }
    }

    return (
      <Box
        sx={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "85%",
          marginInline: "auto",
        }}
      >
        <Box sx={{ height: "20%" }}>
          <Image alt="Logo" src={Logo} width={150} height={150} />
        </Box>
        <Box sx={{ height: "80%", textAlign: "center" }}>
          {wrongAnswer ? (
            <Wrong />
          ) : isFinished ? (
            <Typography>You completed the game</Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginInline: "auto",
                height: "100%",
                paddingBlock: "2rem",
              }}
            >
              <Typography className={styles.questionBox}>
                {decodeHtml(quiz[currentIndex].question)}
                <span
                  className={`${styles.decorations} ${styles.topLeft}`}
                ></span>
                <span
                  className={`${styles.decorations} ${styles.topRight}`}
                ></span>
                <span
                  className={`${styles.decorations} ${styles.bottomLeft}`}
                ></span>
                <span
                  className={`${styles.decorations} ${styles.bottomRight}`}
                ></span>
              </Typography>
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
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  textAlign: "center",
                  width: "70%",
                  marginInline: "auto",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "12px" }}>Difficulty</Typography>
                  <Typography
                    sx={{
                      backgroundColor: "var(--main-color)",
                      borderRadius: "8px",
                      paddingBlock: "6px",
                      fontSize: "12px",
                    }}
                  >
                    {questions.results[currentIndex].difficulty}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: "12px" }}>Category</Typography>
                  <Typography
                    sx={{
                      backgroundColor: "var(--main-color)",
                      borderRadius: "8px",
                      paddingBlock: "6px",
                      fontSize: "12px",
                    }}
                  >
                    {decodeHtml(questions.results[currentIndex].category)}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px" }}>Type</Typography>
                  <Typography
                    sx={{
                      backgroundColor: "var(--main-color)",
                      borderRadius: "8px",
                      paddingBlock: "6px",
                      fontSize: "12px",
                    }}
                  >
                    {questions.results[currentIndex].type}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
};

export default QuizPage;
