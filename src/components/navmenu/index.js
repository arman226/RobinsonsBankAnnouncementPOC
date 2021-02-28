import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { Typography, makeStyles, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Item from "./Item";

const menu = [
  {
    title: "Home",
    component: "/",
  },
  {
    title: "Skills",
    component: "/skills",
  },
];

const NavMenu = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <AppBar
      elevation={0}
      position="fixed"
      style={{ boxShadow: "none", background: "#FFFF" }}
    >
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            <div>
              <Typography className={classes.title}>INITIALS</Typography>
            </div>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => setIsOpen(!isOpen)}
            className="mr-2 white "
          />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={isOpen}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              {menu.map(({ title, component }, idx) => (
                <Item
                  title={title}
                  component={component}
                  onClickListener={() => {
                    setSelectedPage(title);
                  }}
                />
              ))}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 99999999,
    boxShadow: "none",
    display: "flex",
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 5,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: 25,
    // fontFamily: "Segoe UI",
  },
  profession: {
    fontSize: 13,
  },
}));

export default NavMenu;
