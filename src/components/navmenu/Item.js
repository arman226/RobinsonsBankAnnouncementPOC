import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { WHITE } from "../../styles/colors.styles";

const Item = ({ title, component, onClickListener }) => {
  const classes = useStyles();
  return (
    <NavItem onClick={onClickListener}>
      <NavLink tag={Link} className="text-dark" to={component} color={WHITE}>
        <Typography style={{ color: WHITE, fontWeight: "bold" }}>
          {title}
        </Typography>
      </NavLink>
    </NavItem>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Segoe UI",
    color: "#F3F3F3",
  },
}));

export default Item;
