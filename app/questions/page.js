"use client";
import React, { createContext, useContext, useState } from "react";
import styles from "./page.module.css";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Box,
} from "@mui/material";
import { categories } from "../../public/categories/categories";
import { difficulties } from "@/public/difficulties/difficulties";
import { useQuiz } from "../context/QuizContext";
import Buttons from "@/components/Buttons";
import { useRouter } from "next/navigation";
import ErrorIcon from "@mui/icons-material/Error";
import Logo from "../../public/assets/images/logo.png";
import Image from "next/image";

const QuestionsPage = () => {
  const [questionsQuantity, setQuestionsQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [style, setStyle] = useState("");
  const { setQuestions } = useQuiz();
  const [noQuestionSelected, setNoQuestionSelected] = useState(false);
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
    if (!questionsQuantity) {
      setNoQuestionSelected(true);
    } else {
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
  }

  return (
    <Box
      sx={{
        height: "100dvh",
        width: "85%",
        display: "flex",
        flexDirection: "column",
        marginInline: "auto",
      }}
    >
      <Box
        sx={{
          height: "15%",
          textAlign: " center",
        }}
      >
        <Image alt="Logo" src={Logo} width={150} height={150} />
      </Box>
      <Box
        sx={{
          height: "85%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBlock: "2.5rem",
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-main)",
              fontSize: "1rem",
              textAlign: "center",
              textShadow: "3px 3px 3px black",
            }}
          >
            How many questions?
          </Typography>
          <FormControl fullWidth variant="filled">
            <InputLabel
              sx={{
                color: "rgba(255 255 255 / 100%)",
                fontSize: "12px",
              }}
            >
              Number of questions
            </InputLabel>

            <Select
              value={questionsQuantity}
              onChange={(e) => setQuestionsQuantity(e.target.value)}
              sx={{
                backgroundColor: "var(--main-color)",
                height: "50px",
                borderRadius: "80px",
              }}
            >
              {Array.from({ length: 50 }, (_, i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {noQuestionSelected && (
            <Typography
              sx={{
                color: "red",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                fontSize: "13px",
                marginTop: "24px",
                textAlign: "center",
              }}
            >
              <ErrorIcon sx={{ width: "15px", height: "15px" }} /> You haven't
              selected the quantity of questions
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-main)",
              fontSize: "1rem",
              textAlign: "center",
              textShadow: "3px 3px 3px black",
            }}
          >
            What's your favourite category?
          </Typography>
          <FormControl fullWidth variant="filled">
            <InputLabel
              sx={{ color: "rgba(255 255 255 / 100%)", fontSize: "12px" }}
            >
              Choose category
            </InputLabel>

            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                backgroundColor: "var(--main-color)",
                height: "50px",
                borderRadius: "80px",
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-main)",
              fontSize: "1rem",
              textShadow: "3px 3px 3px black",
              textAlign: "center",
            }}
          >
            What's the difficulty you'd like to go for?
          </Typography>
          <FormControl fullWidth variant="filled">
            <InputLabel
              sx={{ color: "rgba(255 255 255 / 100%)", fontSize: "12px" }}
            >
              Choose Difficulty
            </InputLabel>

            <Select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              sx={{
                backgroundColor: "var(--main-color)",
                height: "50px",
                borderRadius: "80px",
              }}
            >
              {difficulties.map((difficulty, i) => (
                <MenuItem key={i} value={difficulty.value}>
                  {difficulty.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-main)",
              fontSize: "1rem",
              textAlign: "center",
              textShadow: "3px 3px 3px black",
            }}
          >
            Do you prefer multiple choice or true/false style of trivia?
          </Typography>
          <FormControl fullWidth variant="filled">
            <InputLabel
              sx={{ color: "rgba(255 255 255 / 100%)", fontSize: "12px" }}
            >
              Choose Style
            </InputLabel>

            <Select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              sx={{
                backgroundColor: "var(--main-color)",
                height: "50px",
                borderRadius: "80px",
              }}
            >
              {types.map((type, i) => (
                <MenuItem key={i} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <Buttons name={"Reset Options"} click={resetOptions} />

          <Buttons
            name={"Start Game"}
            click={() =>
              getData(questionsQuantity, category, difficulty, style)
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionsPage;
