import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { PADDING_TOP } from "../../styles/dimens.styles";
import { LIGHT_GRAY, PRIMARY_COLOR, WHITE } from "../../styles/colors.styles";

const CreateAnnouncement = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Create Announcement</Typography>
      <Box className={classes.form} borderTop={2} borderColor={PRIMARY_COLOR}>
        {/* Title */}
        <div className={classes.formItem}>
          <div className="col-md-3 order-md-1">
            <Typography className={classes.label}>Title</Typography>
          </div>
          <div className="col-md-7 order-md-2">
            <input className={classes.input} />
          </div>
        </div>

        {/* Body */}
        <div className={classes.formItem}>
          <div className="col-md-3 order-md-1">
            <Typography className={classes.label}>Description</Typography>
          </div>
          <div className="col-md-7 order-md-2 ">
            <textarea rows="5" className={classes.input} />
          </div>
        </div>

        {/* Body */}
        <div className={classes.formItem}>
          <div className="col-md-3 order-md-1">
            <Typography className={classes.label}>Announcement Type</Typography>
          </div>
          <div className="col-md-7 order-md-2">
            <Select value={10} className={classes.input}>
              <MenuItem value={10}>General Announcement</MenuItem>
              <MenuItem value={20}>Personal Announcement</MenuItem>
            </Select>
          </div>
        </div>

        <hr />

        {/* Buttons */}
        <div className={classes.buttons}>
          <Button>Back To List</Button>
          <Button>Publish</Button>
        </div>
      </Box>
    </div>
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
  form: {
    backgroundColor: WHITE,
    paddingTop: 20,
    padding: 15,
    textAlign: "left",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
  formItem: {
    flexDirection: "row",
    display: "flex",
    paddingBottom: 15,
  },
  header: {
    textAlign: "start",
    paddingBottom: 10,
    fontWeight: "bolder",
  },
  input: {
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
  },
}));
export default CreateAnnouncement;
