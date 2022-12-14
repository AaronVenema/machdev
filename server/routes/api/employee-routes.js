const router = require("express").Router()

const { 
  getAllEmployees,
  lookupEmployeeByToken,
  getEmployeeById,
  createEmployee,
  authenticateLogin,
  updateEmployeeById,
  deleteEmployeeById,
} = require("../../controllers/employee-controller")

// route for getting all employees
router.route("/").get(getAllEmployees);
// route for getting if an employee is logged based on their cookies/tokens
router.route("/lookup").get(lookupEmployeeByToken); // <- May need to rework this later
// route for getting an employee by its id
router.route("/:id").get(getEmployeeById);

// route for creating a new employee
router.route("/").post(createEmployee);
// route for authenticating an employee login
router.route("/auth").post(authenticateLogin);

// route for updating an employee by its id
router.route("/:id").put(updateEmployeeById);

// route for deleting an employee by its id
router.route("/:id").delete(deleteEmployeeById);

module.exports = router;