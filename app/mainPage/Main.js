import React from "react";
import styles from "./Main.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Buttons from "@/components/Buttons";

const Main = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to the OpenTDB Trivia Game. Please choose your options in the
          next steps and get ready to play
        </h1>
        <Link href="/questions">
          <Buttons name={"Continue"} />
        </Link>
      </div>
    </div>
  );
};

export default Main;
