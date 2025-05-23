import React from "react";
import { Button } from "@mui/material";
import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const { name } = props;
  return (
    <Button
      className={styles.button}
      size="large"
      variant="contained"
      sx={{
        textTransform: "capitalize",
        borderColor: "var(--background)",
        borderWidth: "2px",
        boxShadow: "4px 4px 10px var(--background)",
        backgroundColor: "var(--buttons-bg)",
        width: "31vw",
        fontFamily: "var(--font-main)",
        color: "var(--background)",
        backgroundColor: "var(--buttons-bg)",
        boxShadow: "4px 4px 10px var(--background)",
      }}
    >
      {name}
    </Button>
  );
};

export default Buttons;
