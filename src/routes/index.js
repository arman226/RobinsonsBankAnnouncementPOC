import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import List from "../pages/announcementList";
import NavMenu from "../components/navmenu";

const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Route exact path="/" component={List} />
      </Router>
    </>
  );
};

export default RootRoute;
