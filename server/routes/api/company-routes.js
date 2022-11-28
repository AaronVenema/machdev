const router = require("express").Router()

const { 
  getAllCompanies, 
  getCompanyById,
  createCompany,
  updateCompanyById,
  deleteCompanyById,
} = require("../../controllers/company-controller")

// route for getting all companies
router.route("/").get(getAllCompanies);
// route for getting a company by its id
router.route("/:id").get(getCompanyById);

// route for creating a new company
router.route("/").post(createCompany);

// route for updating a company by its id
router.route("/:id").put(updateCompanyById);

// route for deleting a company by its id
router.route("/:id").delete(deleteCompanyById);

module.exports = router;