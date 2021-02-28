import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "../navmenu";

export default ({ children }) => (
  <React.Fragment>
    <NavMenu />
    <Container>{children}</Container>
  </React.Fragment>
);
