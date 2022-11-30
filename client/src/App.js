import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import { AppProvider } from "./components/publicview/utils/AppContext"

import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <AppProvider>
        <Nav/>
      </AppProvider>  
    </Router>
  );
}

export default App;
