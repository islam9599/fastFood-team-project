import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Body, Container } from "./style";

const Root = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Body>Body</Body>
      </Container>
    </Router>
  );
};

export default Root;
