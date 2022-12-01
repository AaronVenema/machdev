const router = require("express").Router();
// const companyRoutes = require("./company-routes.js")
const departmentRoutes = require("./department-routes.js");
const employeeRoutes = require("./employee-routes.js");
const projectRoutes = require("./project-routes.js");
const serviceRequestRoutes = require("./serviceRequest-routes")

// router.use("/company", companyRoutes);
router.use("/department", departmentRoutes);
router.use("/employee", employeeRoutes);
router.use("/project", projectRoutes);
router.use("/servicerequest", serviceRequestRoutes);
module.exports = router;