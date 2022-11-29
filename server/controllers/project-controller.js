const Project = require("../models/Project");
const Department = require("../models/Department");
const Employee = require("../models/Employee");
const connection = require("../config/connections");

require("dotenv").config();

const getAllProjects = async (req, res) => {
  try {
    const getAllQuery = await Project.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No projectss found!" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const getByIdQuery = await Project.findById(req.params.id)
    res.status(200).json({ result: "success", payload: getByIdQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No project found with that ID!" });
  }
};

const createProject = async (req, res) => {
  try {
    const createQuery = await Project.create(req.body);
    res.status(200).json({result: "success", payload: createQuery});
  }
  catch(err) {
    res.status(400).json({ message: "Unable to create a project" });
  }
};

// const putDepartmentOfProject = async (req, res) => {
//   try {
//     try {
//       await Department.findById(req.params.departmentId);
//       const updateByIdQuery = await Project.findOneAndUpdate(
//         { _id: req.params.projectId },
//         { $addToset: req.body },
//         { runValidators: true, new: true }
//       );
//       res.status(200).json({ result: "success", payload: updateByIdQuery});
//     }
//     catch(err) {
//       res.status(400).json({ message: "No project found with that ID!" });
//     }
//   }
//   catch(err) {
//     res.status(400).json({ message: "No department found with that ID!" });
//   }
// };

const putEmployeeOnProject = async (req, res) => {
  try {
    const empHolder = await Employee.findById(req.params.employeeId);
    try {
      const updateByIdQuery = await Project.findOneAndUpdate(
        { _id: req.params.projectId },
        { $push: { workers: req.params.employeeId } }, // <- Way doesn't $addToSet work here?
        { runValidators: true, new: true }
      );
      res.status(200).json({ result: "success", payload: updateByIdQuery});
    }
    catch(err) {
      res.status(400).json({ message: "No project found with that ID!" });
    }
  }
  catch(err) {
    res.status(400).json({ message: "No employee found with that ID!" });
  }
};

const updateProjectById = async (req, res) => {
  try {
    const updateByIdQuery = await Project.findOneAndUpdate(
      {_id: req.params.id},
      { $set: req.body },
      { runValidators: true, new: true }
    );
    res.status(200).json({ result: "success", payload: updateByIdQuery });
  }
  catch(err) {
    console.log(err);
    res.status(400).json({ message: "No project found with that ID!" });
  }
};

const removeEmployeeFromProject = async (req, res) => {
  try {
    const empHolder = await Employee.findById(req.params.employeeId);
    try {
      const updateByIdQuery = await Project.findOneAndUpdate(
        { _id: req.params.projectId },
        { $pull: {workers: req.params.employeeId} },
        { runValidators: true, new: true }
      );
      res.status(200).json({ result: "success", payload: updateByIdQuery});
    }
    catch(err) {
      res.status(400).json({ message: "No project found with that ID!" });
    }
  }
  catch(err) {
    res.status(400).json({ message: "No employee found with that ID!" });
  }
}

const deleteProjectById = async (req,res) => {
  try {
    const delByIdQuery = await Project.findOneAndDelete({ _id: req.params.id });

    const currQuery = await Department.findOneAndUpdate(
      { currentProjects : req.params.id },
      { $pull: {currentProjects: req.params.id} },
      { runValidators: true, new: true }
    );

    const compQuery = await Department.findOneAndUpdate(
      { completedProjects : req.params.id },
      { $pull: {completedProjects: req.params.id} },
      { runValidators: true, new: true }
    );

    res.status(200).json({ result: "success", payload: delByIdQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No project found with that ID!" });
  }
}

module.exports = { 
  getAllProjects,
  getProjectById,
  createProject,
  // putDepartmentOfProject,
  putEmployeeOnProject,
  updateProjectById,
  removeEmployeeFromProject,
  deleteProjectById,
};