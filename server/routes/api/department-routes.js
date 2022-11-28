const router = require("express").Router()

const { 
  getAllDepartments, 
  getDepartmentById,
  createDepartment,
  putCurrProject,
  putCompProject,
  updateDepartmentById,
  deleteDepartmentById,
} = require("../../controllers/department-controller")

// route for getting all departments
router.route("/").get(getAllDepartments);
// route for getting a department by its id
router.route("/:id").get(getDepartmentById);

// route for creating a new department
router.route("/").post(createDepartment);

// route for adding a project to a department's current projects
router.route("/:id/current").put(putCurrProject);
// route for adding a project to a department's completed projects from current projects
router.route("/:id/complete").put(putCompProject);
// route for updating a department by its id
router.route("/:id").put(updateDepartmentById);

// route for deleting a department by its id
router.route("/:id").delete(deleteDepartmentById);

module.exports = router;