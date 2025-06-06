import React from "react";
import { Button } from "@mui/material";

const Buttons = (props) => {
  const { name, click } = props;
  return (
    <Button
      onClick={click}
      size="large"
      variant="contained"
      sx={{
        textTransform: "capitalize",
        borderColor: "var(--background)",
        borderWidth: "2px",
        boxShadow: "4px 4px 10px var(--background)",
        backgroundColor: "var(--buttons-bg)",
        fontFamily: "'Ginto', var(--font-main), Arial, sans-serif",
        color: "#ffffff",
        backgroundColor: "var(--buttons-bg)",
        boxShadow: "4px 4px 10px var(--background)",
      }}
    >
      {name}
    </Button>
  );
};

export default Buttons;
