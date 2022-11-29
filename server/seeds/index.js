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
    for(let e of employees){
        console.log(e.firstName);
        await Employee.create({...e})
    }
    console.log("Employees Inserted ");
    console.log("Seeding Departments");
    await Department.insertMany(departments, (error,docs) => {
        if(error){
            console.log(error); 
         }
        console.log("Departments Inserted ");
    });
    console.log("Seeding Projects");
    await Project.insertMany(projects, (error,docs) =>{
        if(error){
            console.log(error); 
         }
        console.log("Projects Inserted ");
    });
    
    console.log("Seeding Service Requests");
    await ServiceRequest.insertMany(service, (error,docs) => {
        if(error){
            console.log(error); 
         }
        console.log("Serice inserted ");
        process.exit();
    });
}

seedStuff();

// process.exit();