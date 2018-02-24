import React, {Component} from "react";
// EMPLOYEE HOME STYLES
import "./Employee.home.css"
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";


// EMPLOYEE HOME PAGE
class EmployeeHome extends Component {
    // RENDER
    render() {
        // RETURN
        return (
            <div className="container-fluid">
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