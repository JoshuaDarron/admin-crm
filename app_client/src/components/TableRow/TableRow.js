import React, {Component} from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";

// TABLE ROW COMPONENT
class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {/* EMPLOYEE VIEW */}
                    <Link to={`/employees/view/${this.props.employee.id}`}>
                        <span className="glyphicon glyphicon-eye-open"></span>
                    </Link>
                </td>
                <td>
                    {/* EMPLOYEE EDIT */}
                    <Link to={`/employees/edit/${this.props.employee.id}`}>
                        <span className="glyphicon glyphicon-pencil"></span>
                    </Link>
                </td>
                {/* FIRST NAME */}
                <td>
                    {this.props.employee.firstName}
                </td>
                {/* LAST NAME */}
                <td>
                    {this.props.employee.lastName}
                </td>
                {/* AGE */}
                <td>
                    {this.props.employee.age}
                </td>
                {/* JOB TITLE */}
                <td>
                    {this.props.employee.jobTitle}
                </td>
            </tr>
        ); // END RETURN 
    }; // END RENDER
}; // END TABLE ROW

// EXPORT TABLE ROW
export default TableRow;