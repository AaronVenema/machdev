const router = require("express").Router()

const { 
  getAllDepartments, 
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartmentById,
} = require("../../controllers/department-controller")

// route for getting all departments
router.route("/").get(getAllDepartments);
// route for getting a department by its id
router.route("/:id").get(getDepartmentById);

// route for creating a new department
router.route("/").post(createDepartment);

// route for updating a department by its id
router.route("/:id").put(updateDepartment);

// route for deleting a department by its id
router.route("/:id").delete(deleteDepartmentById);

module.exports = router;