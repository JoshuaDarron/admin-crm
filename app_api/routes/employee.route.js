// REQUIRE EXPRESS
const express = require("express");
// REQUIRE THE MODEL CONTROLLERS 
const ctrl = require("../controllers/employee.ctrl");
// GRAP AND USE THE EXPRESS ROUTER 
const router = express.Router();

// CREATE AN EMPLOYEE
router.post("/create", ctrl.createEmployee);
// FIND ALL EMPLOYEES
router.get("/findall", ctrl.findAllEmployees);
// FIND ONE EMPLOYEE @ ID
router.get("/findone/:id", ctrl.findOneEmployee);
// DELETE ONE EMPLOYEE
router.delete("/delete/:id", ctrl.deleteEmployee);

// EXPORT THE ROUTER TO BE USED IN THE SERVER
module.exports = router;