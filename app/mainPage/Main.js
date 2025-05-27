import React from "react";
import styles from "./Main.module.css";
import { useRouter } from "next/navigation";
import Buttons from "@/components/Buttons";

const Main = () => {
  const router = useRouter();

  const nextPage = () => {
    router.push("/questions");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to the OpenTDB Trivia Game. Please choose your options in the
          next steps and get ready to play
        </h1>
        <Buttons name={"Continue"} click={nextPage} />
      </div>
    </div>
  );
};

export default Main;
