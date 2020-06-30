import React from 'react';
import {Home} from "./Pages/Home";
import {Login} from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Chatbox from "./Pages/Chat";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
   body{
       background: white;
       min-height: 100vh;
       margin: 0;
       color: black;
   }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
          <Switch>
             <Route path="/login">
                <Login/>
             </Route>
             <Route path="/register">
                <Register/>
             </Route>
             <Route path="/Home">
                <Home/>
             </Route>
             <Route path="/Dashboard">
                <Dashboard/>
             </Route>
             <Route path="/chatbox/:name">
                <Chatbox/>
             </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
