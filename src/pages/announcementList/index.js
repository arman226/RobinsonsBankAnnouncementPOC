import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { PADDING_TOP } from "../../styles/dimens.styles";
import { PRIMARY_COLOR, WHITE } from "../../styles/colors.styles";
import Table from "./table";

const Skills = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* <Typography className={classes.header}>
        Announcement Management
      </Typography> */}
      <Box
        borderColor={PRIMARY_COLOR}
        borderTop={2}
        className={classes.announcementListContainer}
      >
        <Typography
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            textAlign: "start",
            fontWeight: "bolder",
          }}
        >
          Announcements List
        </Typography>
        <Table />
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: PADDING_TOP,
    textAlign: "center",
    backgroundColor: "#F3F3F3",
    minHeight: window.innerHeight,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  announcementListContainer: {
    backgroundColor: WHITE,
    margin: 20,
    textAlign: "start",
    padding: 15,
  },
  header: { fontSize: 20, fontWeight: "bold" },
}));

export default Skills;
