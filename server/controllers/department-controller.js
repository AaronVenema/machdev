const Department = require("../models/Department");
const Project = require("../models/Project");
const connection = require("../config/connections");

require("dotenv").config();

const getAllDepartments = async (req, res) => {
  try {
    const getAllQuery = await Department.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No departments found!" });
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const getByIdQuery = await Department.findById(req.params.id)
    res.status(200).json({ result: "success", payload: getByIdQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No department found with that ID!" });
  }
};

const createDepartment = async (req, res) => {
  try {
    const createQuery = await Department.create(req.body);
    res.status(200).json({result: "success", payload: createQuery});
  }
  catch(err) {
    res.status(400).json({ message: "Unable to create a department" });
  }
};

const putCurrProject = async (req, res) => {
  try {
    const projHolder = await Project.findById(req.params.projectId);
    try {
      const updateByIdQuery = await Department.findOneAndUpdate(
        { _id: req.params.departmentId },
        { $push: {currentProjects: req.params.projectId} },
        { runValidators: true, new: true }
      );
      res.status(200).json({ result: "success", payload: updateByIdQuery});
    }
    catch(err) {
      res.status(400).json({ message: "No department found with that ID!" });
    }
  }
  catch(err) {
    res.status(400).json({ message: "No project found with that ID!" });
  }
};

const putCompProject = async (req, res) => {
  try {
    const projHolder = await Project.findById(req.params.projectId);
    try {
      // This feels very ugly, there must be a way to chain together multiple field updates
      await Department.findOneAndUpdate(
        { _id: req.params.departmentId },
        { $pull: {currentProjects: req.params.projectId}},
        { runValidators: true, new: true }
      );

      await projHolder.update(
        { $set: { completed: true } }
      );

      const updateByIdQuery = await Department.findOneAndUpdate(
        { _id: req.params.departmentId },
        { $push: {completedProjects: req.params.projectId} },
        { runValidators: true, new: true }
      );

      res.status(200).json({ result: "success", payload: updateByIdQuery });
    }
    catch(err) {
      res.status(400).json({ message: "No department found with that ID!" });
    }
   }
  catch(err) {
    res.status(400).json({ message: "No project found with that ID!" });
  }
};

const updateDepartmentById = async (req, res) => {
  try {
    const updateByIdQuery = await Department.findOneAndUpdate(
      {_id: req.params.id},
      { $set: req.body },
      { runValidators: true, new: true }
    );
    res.status(200).json({ result: "success", payload: updateByIdQuery });
  }
  catch(err) {
    console.log(err);
    res.status(400).json({ message: "No department found with that ID!" });
  }
};

const deleteDepartmentById = async (req,res) => {
  try {
    console.log(req.params);
    const delByIdQuery = await Department.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({ result: "success", payload: delByIdQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No department found with that ID!" });
  }
};

module.exports = {
  getAllDepartments, 
  getDepartmentById,
  createDepartment,
  putCurrProject,
  putCompProject,
  updateDepartmentById,
  deleteDepartmentById,
};