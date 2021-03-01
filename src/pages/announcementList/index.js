import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { PADDING_TOP } from "../../styles/dimens.styles";
import { LIGHT_GRAY, PRIMARY_COLOR, WHITE } from "../../styles/colors.styles";
import Table from "./table";

const Skills = () => {
  const classes = useStyles();
  const history = useHistory();
  const createAnnouncement = () => {
    history.push("/create");
  };
  return (
    <Box className={classes.root}>
      <Box
        borderColor={PRIMARY_COLOR}
        borderTop={2}
        className={classes.announcementListContainer}
      >
        <div className="col-md-10 order-md-1">
          <Typography className={classes.header}>Announcements List</Typography>
        </div>
        <div className="col-md-2 order-md-2 align-content-right">
          <Button
            className={classes.button}
            size="small"
            onClick={createAnnouncement}
          >
            Create Announcement
          </Button>
        </div>
      </Box>
      <Table />
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: PADDING_TOP,
    textAlign: "center",
    backgroundColor: LIGHT_GRAY,
    minHeight: window.innerHeight,
    paddingLeft: 30,
    paddingRight: 30,
  },
  announcementListContainer: {
    backgroundColor: WHITE,
    padding: 15,
    flexDirection: "row",
    display: "flex",
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: "start",
    fontWeight: "bolder",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    height: 40,
    color: "#FFFF",
    padding: 10,
  },
}));

export default Skills;
