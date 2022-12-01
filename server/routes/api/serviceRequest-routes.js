const router = require("express").Router()

const {
  getAllServiceRequests,
  createServiceRequest
} = require("../../controllers/serviceRequest-controller");

// route for getting all service requests
router.route("/").get(getAllServiceRequests);

// route for creating a new service request
router.route("/").post(createServiceRequest);

module.exports = router;