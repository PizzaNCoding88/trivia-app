"use client";
import React, { createContext, useContext, useState } from "react";
import styles from "./page.module.css";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import { categories } from "../../public/categories/categories";
import { difficulties } from "@/public/difficulties/difficulties";
import { useQuiz } from "../context/QuizContext";
import Buttons from "@/components/Buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const QuestionsPage = () => {
  const [questionsQuantity, setQuestionsQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [style, setStyle] = useState("");
  const { setQuestions } = useQuiz();
  const router = useRouter();

  const types = [
    { value: "0", label: "Both" },
    { value: "multiple", label: "Multiple Choice" },
    { value: "boolean", label: "True / False" },
  ];

  function resetOptions() {
    setCategory("");
    setDifficulty("");
    setQuestionsQuantity("");
    setStyle("");
  }

  async function getData(questionsQuantity, category, difficulty, style) {
    const url = `https://opentdb.com/api.php?amount=${questionsQuantity}&category=${category}&difficulty=${difficulty}&type=${style}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setQuestions(json);
      router.push("/quiz");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className={styles.page}>
      <div>
        <Typography
          sx={{
            fontFamily: "var(--font-main)",
            fontSize: "5vw",
            textAlign: "center",
          }}
        >
          How many questions would you like to go for?
        </Typography>
        <FormControl fullWidth variant="filled">
          <InputLabel>Number of questions</InputLabel>

          <Select
            value={questionsQuantity}
            onChange={(e) => setQuestionsQuantity(e.target.value)}
          >
            {Array.from({ length: 50 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography
          sx={{
            fontFamily: "var(--font-main)",
            fontSize: "5vw",
            textAlign: "center",
          }}
        >
          What's your favourite category?
        </Typography>
        <FormControl fullWidth variant="filled">
          <InputLabel>Choose category</InputLabel>

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography
          sx={{
            fontFamily: "var(--font-main)",
            fontSize: "5vw",

            textAlign: "center",
          }}
        >
          What's the difficulty you'd like to go for?
        </Typography>
        <FormControl fullWidth variant="filled">
          <InputLabel>Choose Difficulty</InputLabel>

          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            {difficulties.map((difficulty, i) => (
              <MenuItem key={i} value={difficulty.value}>
                {difficulty.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography
          sx={{
            fontFamily: "var(--font-main)",
            fontSize: "5vw",
            textAlign: "center",
          }}
        >
          Do you prefer multiple choice or true/false style of trivia?
        </Typography>
        <FormControl fullWidth variant="filled">
          <InputLabel>Choose Style</InputLabel>

          <Select value={style} onChange={(e) => setStyle(e.target.value)}>
            {types.map((type, i) => (
              <MenuItem key={i} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={styles.buttonsContainer}>
        <Buttons name={"Reset Options"} click={resetOptions} />
        <Link href={"/quiz"}>
          <Buttons
            name={"Start Game"}
            click={() =>
              getData(questionsQuantity, category, difficulty, style)
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default QuestionsPage;
