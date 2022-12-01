import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { useAppContext } from "./publicview/utils/AppContext";

import CurrentProjects from "./internalview/currentprojects/currentprojects"
import EmployeeLogout from "./internalview/employeelogout/employeelogout"
import IHomepage from "./internalview/ihomepage/iHomepage";
import PmBoard from "./internalview/projectsmessageboard/pmBoard";
import EmployeeView from "./publicview/employeeviewer/employeeview";
import DepartmentView from "./publicview/departmentviewer/departmentview";
import CompletedProjects from './publicview/completedprojects/completedprojects';
import Homepage from "./publicview/homepage/homepage";
import ServiceRequest from "./publicview/servicerequest/servicerequest"
import EmployeeLogin from "./publicview/employeelogin/employeelogin"
import ISRequest from "./internalview/iServiceRequest/iServiceRequest";

const Nav = () =>{
    const { appState } = useAppContext();
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/employeeView" element={<EmployeeView />} />
            <Route path="/departmentView" element={<DepartmentView />} />
            <Route path="/completedProjects" element={<CompletedProjects />} />
            <Route path="/serviceRequest" element={<ServiceRequest />} />
            <Route path="/employeeLogin" element={<EmployeeLogin />} />
            {appState.employee &&
                <>
                    <Route path="/currentProjects" element={<CurrentProjects />} />
                    <Route path="/iServiceRequest" element={<ISRequest />} />
                    <Route path="/employeeLogout" element={<EmployeeLogout />} />
                    <Route path="/iHomepage" element={<IHomepage />} />
                    <Route path="/pmBoard" element={<PmBoard />} />
                </>

            }
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    );
}


export default Nav;