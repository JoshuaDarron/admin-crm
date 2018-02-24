import React, {Component} from "react";
// EMPLOYEE HOME STYLES
import "./Employee.home.css"
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";
// COMPONENTS
import Table from "../../../components/Table";
// DB MODELS
import EmployeeModel from "../../../helpers/models/EmployeeModel";


// EMPLOYEE HOME PAGE
class EmployeeHome extends Component {

    // CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }; // END PROPS CONSTRUCTOR

    // COMPONENT DID MOUNT
    componentDidMount() {
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

    // RENDER
    render() {
        // RETURN
        return (
            <div className="container">
                {this.state.employees.length > 0 ?<Table employees = {this.state.employees}/> : ""}
                <Link to="/employee/add">
                    <button className="btn btn-primary">
                        Add Employee
                    </button>
                </Link>
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END EMPLOYEE HOME

// EXPORT EMPLOYEE HOME PAGE
export default EmployeeHome;