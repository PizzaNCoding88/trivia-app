import React from "react";
import { Button } from "@mui/material";
import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const { name } = props;
  return (
    <Button className={styles.button} size="large" variant="outlined">
      {name}
    </Button>
  );
};

export default Buttons;
