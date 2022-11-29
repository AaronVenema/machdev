const employees = require("./employees");
const projects = require("./projects");
const departments = require("./departments");
const service = require('./service');
// const { Project, Department, ServiceRequest } = require("../models");
const Employee = require('../models/Employee');
const Project = require('../models/Project');
const Department = require('../models/Department');
const ServiceRequest = require('../models/ServiceRequest');
// const Employee = require('../models/Employee');
const db = require("../config/connections");


async function seedStuff() {
    console.log("Seeding Employees");
    Employee.insertMany(employees, (error,docs) => {
        if(error){
           console.log(error); 
        }
        console.log("Employees Inserted ",docs);
    })
    console.log("Seeding Departments");
    Department.insertMany(departments, (error,docs) => {
        if(error){
            console.log(error); 
         }
        console.log("Departments Inserted ",docs);
    });
    console.log("Seeding Projects");
    Project.insertMany(projects, (error,docs) =>{
        if(error){
            console.log(error); 
         }
        console.log("Projects Inserted ",docs);
    });
    
    console.log("Seeding Service Requests");
    ServiceRequest.insertMany(service, (error,docs) => {
        if(error){
            console.log(error); 
         }
        console.log("Serice inserted ",docs);
    });
    process.exit();
}

seedStuff();