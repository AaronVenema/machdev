const Employee = require("../models/Employee");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const bcrypt = require("bcrypt");
const connection = require("../config/connection");
const { get } = require("mongoose");

require("dotenv").config();

const getAllEmployees = async (req, res) => {
  try {
    const getAllQuery = await Employee.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No employees found!" });
  }
}

const getEmployeeById = async (req, res) => {
  try {
    const getByIdQuery = await Employee.findById(req.params.id)
    res.status(200).json({ result: "success", payload: getByIdQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No employee found with that ID!" });
  }
}

const lookupEmployeeByToken = async (req, res) => {
  if( !req.headers || !req.headers.cookie ) return res.status(401).json({message: "unauthorized"})
  
  const cookies = cookie.parse(req.headers.cookie);
  const token = cookies["auth-token"];  //cookies.authToken
  if( !token ) return res.status(401).json({message: "unauthorized"})
  
  const isVerified = jwt.verify(token, process.env.JWT_SECRET);
  if( !isVerified ) return res.status(401).json({message: "unauthorized"})

  const employee = await Employee.findById(isVerified._id);
  if( !employee ) return res.status(401).json({message: "unauthorized"})

  return res.status(200).json({ result: "success", payload: employee });
};

const createEmployee = async (req, res) => {
  try {
    const createQuery = await Employee.create(req.body);
    res.status(200).json(sample);
  }
  catch(err) {
    res.status(400).json({ message: "Unable to create an employee" });
  }
}

const authenticateLogin = async (req, res) => {
  const foundEmployee = await Employee.findOne({ email: req.body.email });
  if( !foundEmployee ) return res.status(401).json({ message: "Invalid email" })

  const isValid = await bcrypt.compare(req.body.password, foundEmployee.password);
  if( !isValid ) return res.status(401).json({ message: "Invalid password" })

  const { password, ...modifiedEmployee } = foundEmployee;
  const token = jwt.sign({ _id: foundEmployee._id, email: foundEmployee.email}, process.env.JWT_SECRET);

  res
    .status(200)
    .set({ "auth-token": token })
    .json({ result: "success", employee: modifiedEmployee, token: token })
}

const updateEmployeebyId = async (req, res) => {
  try {
    const getByIdQuery = await Employee.findOneAndUpdate(
      {_id: req.params.id},
      { $set: req.body },
      { runValidators: true, new: true }
    );
    res.status(200).json({ result: "success", payload: getByIdQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No employee found with that ID!" });
  }
};


module.exports = { 
  getAllEmployees, 
  getEmployeeById,
  lookupEmployeeByToken,
  createEmployee,
  authenticateLogin,
  updateEmployeeById,
  deleteEmployeeById,
}