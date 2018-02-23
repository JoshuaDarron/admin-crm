import React, {Component} from "react";
import {Link} from "react-router-dom";

class EmployeeHome extends Component {
    render() {
        return (
            <div>
                <Link to="/employee/add">
                    <button className="btn btn-primary">
                        Add Employee
                    </button>
                </Link>
            </div>
        ); // END RETURN
    };  // END RENDER
};  // END EMPLOYEE HOME  
export default EmployeeHome;