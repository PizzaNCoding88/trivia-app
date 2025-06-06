"use client";
import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  return (
    <QuizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
