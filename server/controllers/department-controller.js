const Department = require("../models/Department");
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
}

const getDepartmentById = async (req, res) => {
  try {
    const getByIdQuery = await Department.findById(req.params.id)
    res.status(200).json({ result: "success", payload: getByIdQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No department found with that ID!" });
  }
}

const createDepartment = async (req, res) => {
  try {
    const createQuery = await Department.create(req.body);
    res.status(200).json(createQuery);
  }
  catch(err) {
    res.status(400).json({ message: "Unable to create a department" });
  }
}

const updateDepartmentById = async (req, res) => {
  try {
    // let updateByIdQuery;
    // let holder = req.body.name;
    // console.log(`>>>${holder}`);
    // if(req.body.workers && (!req.body.name && !req.body.description)) {
    //   updateByIdQuery = await Department.findOneAndUpdate(
    //     {_id: req.params.id},
    //     { $addToSet: req.body.workers },
    //     { runValidators: true, new: true }
    //   );
    // }
    // else {
    //   updateByIdQuery = await Department.findOneAndUpdate(
    //     {_id: req.params.id},
    //     { $set: req.body },
    //     { runValidators: true, new: true }
    //   );
    // }
    const updateByIdQuery = await Department.findOneAndUpdate(
          {_id: req.params.id},
          { $set: req.body },
          { runValidators: true, new: true }
        );
    res.status(200).json({ result: "success", payload: updateByIdQuery });
  }
  catch(err) {
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
}

module.exports = {
  getAllDepartments, 
  getDepartmentById,
  createDepartment,
  updateDepartmentById,
  deleteDepartmentById,
}