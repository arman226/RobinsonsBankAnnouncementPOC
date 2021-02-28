import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const Skills = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>Skills</Typography>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Skills;
