"use client";
import Buttons from "@/components/Buttons";
import { Typography, Box } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const Correct = () => {
  const router = useRouter();
  function returnHome() {
    router.push("/");
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
        color: "white",
        gap: "3rem",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "var(--main-color)",
          paddingBlock: "1rem",
          paddingInline: "1.5rem",
          borderRadius: "8px",
          boxShadow: "2px 2px 10px black",
          fontSize: "1.2rem",
        }}
      >
        You've completed the game
      </Typography>
      <Buttons name={"Return home"} click={returnHome} />
    </Box>
  );
};

export default Correct;
