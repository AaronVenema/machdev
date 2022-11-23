import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import EmployeeView from "./components/publicview/employeeviewer/employeeview";
import DepartmentView from "./components/publicview/departmentviewer/departmentview";
import CompletedProjects from './components/publicview/completedprojects/completedprojects';
import Homepage from "./components/publicview/homepage/homepage";
import CompanyInfo from './components/publicview/companyinfo/companyinfo'
import ServiceRequest from "./components/publicview/servicerequest/servicerequest"
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/employeeView" element={<EmployeeView />} />
      <Route path="/departmentView" element={<DepartmentView />} />
      <Route path="/completedProjects" element={<CompletedProjects />} />
      <Route path="/companyInfo" element={<CompanyInfo />} />
      <Route path="/serviceRequest" element={<ServiceRequest />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
</Router>
       
  );
}

export default App;
