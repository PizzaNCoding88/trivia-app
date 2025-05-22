import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to the OpenTDB Trivia Game. Please choose your options in the
          next steps and get ready to play
        </h1>
        <Button
          sx={{
            textTransform: "capitalize",
            borderColor: "var(--background)",
            borderWidth: "2px",
            boxShadow: "4px 4px 10px var(--background)",
            backgroundColor: "var(--buttons-bg)",
            width: "30vw",
            fontFamily: "var(--font-main)",
            color: "var(--background)",
          }}
          size="large"
          variant="outlined"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
