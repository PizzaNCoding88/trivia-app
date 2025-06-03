"use client";
import Buttons from "@/components/Buttons";
import { Typography, Box } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { userAgent } from "next/server";

const Wrong = () => {
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
        height: "70%",
      }}
    >
      <Typography>Wrong Answer</Typography>
      <Buttons name={"Return home"} click={returnHome} />
    </Box>
  );
};

export default Wrong;
