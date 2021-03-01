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
import { PRIMARY_COLOR, WHITE } from "../../styles/colors.styles";
import logo from "../../assets/logo.png";

const menu = [
  // {
  //   title: "Announcements",
  //   component: "/",
  // },
  // {
  //   title: "Human Resources",
  //   component: "/",
  // },
];

const NavMenu = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <AppBar
      elevation={0}
      position="fixed"
      style={{ boxShadow: "none", background: PRIMARY_COLOR }}
    >
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            <div style={{ flexDirection: "row", display: "flex" }}>
              <img
                src={logo}
                style={{ width: 45, height: 45, borderRadius: 500 }}
              />
              <Typography
                style={{
                  alignSelf: "center",
                  paddingLeft: 10,
                  color: WHITE,
                  fontWeight: "bolder",
                }}
              >
                Announcement Management
              </Typography>
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
