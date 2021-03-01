import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = ({
  backgroundColor,
  color = "black",
  text,
  onClick = () => {},
}) => {
  return (
    <Button
      style={{ backgroundColor, color, marginLeft: 10, marginRight: 10 }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
