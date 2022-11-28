const router = require("express").Router();
// const companyRoutes = require("./company-routes.js")
// const departmentRoutes = require("./employee-routes.js");
const employeeRoutes = require("./employee-routes.js");
// const projectRoutes = require("./project-routes.js");

// router.use("/company", companyRoutes);
// router.use("/department", departmentRoutes);
router.use("/employee", employeeRoutes);
// router.use("/project", projectRoutes);
module.exports = router;