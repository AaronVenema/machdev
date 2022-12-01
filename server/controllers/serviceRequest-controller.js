const ServiceRequest = require("../models/ServiceRequest");
const connection = require("../config/connections");

require("dotenv").config();

const getAllServiceRequests = async (req, res) => {
  try {
    const getAllQuery = await ServiceRequest.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No service requests found!" });
  }
};

const createServiceRequest = async (req, res) => {
  try {
    const createQuery = await ServiceRequest.create(req.body);
    res.status(200).json({result: "success", payload: createQuery});
  }
  catch(err) {
    res.status(400).json({ message: "Unable to create a service request" });
  }
};

module.exports = {
  getAllServiceRequests,
  createServiceRequest
};