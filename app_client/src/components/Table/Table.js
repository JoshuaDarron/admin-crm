import React, {Component} from "react";
// TABLE STYLE
import "./Table.css";
// COMPONENTS
import TableRow from "../TableRow/TableRow";

// TABLE COMPONENT
class Table extends Component {
    // RENDER
    render() {
        // RETURN
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        {/* TABLE HEADING */}
                        <tr>
                            <th>View</th>
                            <th>Edit</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Job Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* RUN TRHOUGH THE DATA ARRAY AND DISPLAY ONE TABLE ROW WITH THE DATA */}
                        {this
                            .props
                            .employees
                            .map(employee => <TableRow key={employee.id} employee={employee}/>)}
                    </tbody>
                </table>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END TABLE COMPONENT

// EXPORT TABLE COMPONENT
export default Table;