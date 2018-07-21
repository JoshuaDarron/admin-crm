// REQUIRE THE DATABASE MODELS
const db = require("../models");

// EXPORT ALL THE CONTROLLERS
module.exports = {

    // CREATE AN EMPLOYEE
    createEmployee: (req, res) => {
        db
            .Employee
            .create({ firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age, jobTitle: req.body.jobTitle })
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
            });
    }, // END CREATE

    // FIND ALL EMPLOYEES
    findAllEmployees: (req, res) => {
        db
            .Employee
            .findAll({})
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END FIND ALL

    // FIND ONE EMPLOYEE @ ID
    findOneEmployee: (req, res) => {
        db
            .Employee
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END FIND ONE

    // DELETE ONE EMPLOYEE
    deleteEmployee: (req, res) => {
        db
            .Employee
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbEmp => {
                res.json("Success!");
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    } // END DELETE

}; // END EXPORT
