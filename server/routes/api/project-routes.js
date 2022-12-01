const router = require("express").Router();

const { 
  getAllProjects,
  getProjectById,
  createProject,
  // putDepartmentOfProject,
  putEmployeeOnProject,
  updateProjectById,
  removeEmployeeFromProject,
  deleteProjectById,
  addCommentToBoard
} = require("../../controllers/project-controller");

//route for getting every project
router.route("/").get(getAllProjects);
// routes that gets a project by its id
router.route("/:id").get(getProjectById);

// route for creating a new project
router.route("/").post(createProject);

// route for changing the department of a project
// router.route("/:projectId/department/:departmentId").put(putDepartmentOfProject);
// route for adding an employee to a project
router.route("/:projectId/employee/:employeeId").put(putEmployeeOnProject);
// route for updating a proejct
router.route("/:id").put(updateProjectById);
router.route("/:projectId/:employeeId").post(addCommentToBoard);

// route form removing an employee from a project's workers array
router.route("/:projectId/employee/:employeeId").delete(removeEmployeeFromProject);
// route for deleting a project
router.route("/:id").delete(deleteProjectById);

module.exports = router;