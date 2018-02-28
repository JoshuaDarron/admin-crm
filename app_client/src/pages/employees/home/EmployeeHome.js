import React, {Component} from "react";
import "./EmployeeHome.css"
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";
// COMPONENTS
import Table from "../../../components/Table";
// DB MODELS
import EmployeeModel from "../../../helpers/models/EmployeeModel";

const categoryName = ["View", "Edit", "First Name", "Last Name", "Age", "Job Title"];

// EMPLOYEE HOME PAGE
class EmployeeHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }; // END PROPS CONSTRUCTOR

    // DID THE OCMPONENT MOUNT? IF TRUE RUN THIS FUNCTION FIRST
    componentDidMount() {
        // DATABASE ROUTE WHEN COMPONENT LOADS
        EmployeeModel
            .getAll()
            .then(response => {
                console.log(response.data)
                this.setState({employees: response.data});
            })
            .catch(err => {
                console.error(err);
            }); // END THEN
    }; // END COMPONENT DID MOUNT

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <h1 class="page-header home-header">
                            Employee List
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {this.state.employees.length > 0
                            ? <Table 
                                category={categoryName}
                                employees={this.state.employees}/>
                            : ""}
                        <Link className="btn btn-primary" to="/employee/add">
                                Add Employee
                        </Link>
                    </div>
                </div>
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END EMPLOYEE HOME

// EXPORT EMPLOYEE HOME PAGE
export default EmployeeHome;