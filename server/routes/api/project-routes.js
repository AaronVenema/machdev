const router = require("express").Router();

const { 
  getAllProjects,
  getProjectById,
  getDepartmentOfProject,
  getEmployeesOfProject,
  createProject,
  putDepartmentOfProject,
  putEmployeeOnProject,
  deleteProjectById,
  removeEmployeeFromProject,
} = require("../../controllers/project-controller");

//route for gettign every project
router.route("/").get(getAllProjects);
// route that gets the department of a project
router.route("/:id/department/").get(getDepartmentOfProject);
// route that gets all the employees on a project
router.route("/:id/employees").get(getEmployeesOfProject);
// routes that gets a project by its id
router.route("/:id").get(getProjectById);

// route for creating a new project
router.route("/").post(createProject);

// route for changing the department of a project
router.route("/:projectId/department/:departmentId").put(putDepartmentOfProject);
// route for adding an employee to a project
router.route("/:projectId/employee/:employeeId").put(putEmployeeOnProject);

// route for deleting a project
router.route("/:id").delete(deleteProjectById);
// route form removing an employee from a project
router.route("/:projectId/employee/:employeeId").delete(removeEmployeeFromProject);

module.exports = router;