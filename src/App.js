import React, { Component, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './Component/index';
import { useOnClickOutside } from './hooks';
import Collections from './Pages/Collection';
import Collections2 from './Pages/Collection2';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is menu tutorial</h1>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>

        <Router>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>

        <Switch>
          <Route path="/collections2">
            <Collections2 />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>

        </Switch>
      </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
