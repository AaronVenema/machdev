const employees = require("./employees");

const projects = require("./projects");
const departments = require("./departments");
const service = require('./service');
const mboard = require("./messageboard");
const message = require("./message");
// const { Project, Department, ServiceRequest } = require("../models");
const Employee = require('../models/Employee');
const Project = require('../models/Project');
const Department = require('../models/Department');
const ServiceRequest = require('../models/ServiceRequest');
const Message = require("../models/Message");
const MessageBoard = require("../models/MessageBoard");
// const Employee = require('../models/Employee');
const db = require("../config/connections");




async function seedStuff() {
    await Employee.remove({});
    await Department.remove({});
    await Project.remove({});
    await ServiceRequest.remove({});
    await Message.remove({});
    await MessageBoard.remove({});

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
    });
    await MessageBoard.insertMany(mboard, (error,docs) => {
        if(error){
            console.log(error); 
         }
        console.log("Message board inserted ");
    });
    await Message.insertMany(message, (error,docs) => {
        if(error){
            console.log(error); 
         }
        console.log("Message inserted ");
        process.exit();
    });

}

seedStuff();

// process.exit();