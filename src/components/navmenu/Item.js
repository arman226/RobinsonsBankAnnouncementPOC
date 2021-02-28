import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const Item = ({ title, component, onClickListener }) => {
  const classes = useStyles();
  return (
    <NavItem onClick={onClickListener}>
      <NavLink tag={Link} className="text-dark" to={component}>
        {title}
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
  },
}));

export default Item;
