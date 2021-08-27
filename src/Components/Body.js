import { React, useState, useEffect } from "react";
import SideBar from "./SideBar";
import Chats from "./Chats";
import Welcome from "./Welcome";

import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ChatWindow from './ChatWindow'

function Body() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  console.log(width);
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <SideBar></SideBar>
            <Welcome></Welcome>
          </Route>
          <Route path="/chats">
            {width <= 768 ? (
              <Container>
                <Chats />
              </Container>
            ) : (
              <Container>
                <SideBar />
                <Chats />
              </Container>
            )}
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export default Body;

/*
{width <= 768 ? (
              <div>
                <Chats />
              </div>
            ) : (
              <div>
                <SideBar />
                <Chats />
              </div>
            )}
            */
