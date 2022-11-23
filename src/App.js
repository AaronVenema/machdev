import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
import './App.css';
import EmployeeView from "./components/publicview/employeeviewer/employeeview";
import DepartmentView from "./components/publicview/departmentviewer/departmentview";
import CompletedProjects from './components/publicview/completedprojects/completedprojects';
import Homepage from "./components/publicview/homepage/homepage";
import HpGrid from "./components/publicview/homepage/hpGrid";
function App() {
  return (
    
    <HpGrid />
       
  );
}

export default App;
