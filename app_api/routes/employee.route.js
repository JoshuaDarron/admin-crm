// REQUIRE EXPRESS
const express = require("express");
// REQUIRE THE MODEL CONTROLLERS 
const ctrl = require("../controllers/employee.ctrl");
// GRAP AND USE THE EXPRESS ROUTER 
const router = express.Router();

// CREATE AN EMPLOYEE
router.post("/employee", ctrl.createEmployee);
// FIND ALL EMPLOYEES
router.get("/employee", ctrl.findAllEmployees);
// FIND ONE EMPLOYEE @ ID
router.get("/employee/:id", ctrl.findOneEmployee);
// DELETE ONE EMPLOYEE
router.delete("/employee/:id", ctrl.deleteEmployee);

// EXPORT THE ROUTER TO BE USED IN THE SERVER
module.exports = router;