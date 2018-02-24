import React, {Component} from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";

// TABLE ROW COMPONENT
class TableRow extends Component {
    // RENDER
    render() {
        // RETURN
        return (
            <tr>
                <td>
                    <Link to={`/employees/view/${this.props.employee.id}`}>
                        <span className="glyphicon glyphicon-eye-open"></span>
                    </Link>
                </td>
                <td>
                    <Link to={`/employees/edit/${this.props.employee.id}`}>
                        <span className="glyphicon glyphicon-pencil"></span>
                    </Link>
                </td>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.jobTitle}</td>
            </tr>
        ); // END RETURN 
    }; // END RENDER
}; // END TABLE ROW

// EXPORT TABLE ROW
export default TableRow;