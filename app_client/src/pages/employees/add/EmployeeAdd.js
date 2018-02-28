import React, {Component} from "react";
import "./EmployeeAdd.css";
// COMPONENTS
import Form from "../../../components/Form";
// HELPERS
import EmployeeModel from "../../../helpers/models/EmployeeModel";
import FormStates from "../../../helpers/FormStates";

// EMPLOYEE ADD PAGE
class EmployeeAdd extends Component {
    // PROPS CONDTRUCTOR AND STATE
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            jobTitle: ""
        };
    }; // END CONSTRUCTOR

    // HANDLE SUBMIT CLICK
    handleSubmit(e) {
        // PREVENT PAGE RELOAD
        e.preventDefault();
        // ERROR HANDLING
        console.log("In the handleSubmit");

        EmployeeModel
            .create(this.state)
            .then(resp => {
                this
                    .props
                    .history
                    .push("/employees")
            })
            .catch(err => {
                console.error(err);
            })
    }; // END HANDLE SUBMIT

    // HANDLE STATE CHANGE
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }; // END HANDLE CHANGE

    // RENDER
    render() {
        // RETURN THIS HTML
        return (
            <div className="container employee-add-header">
                {/* EMPLOYEE ADD TITLE */}
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-8">
                        <h1 class="page-header add-header">
                            Add Employee
                        </h1>
                    </div>
                </div>
                {/* EMPLOYEE ADD FORM */}
                <div className="col-xs-10 col-sm-8 col-md-8" id="form-add">
                    <Form
                        state={FormStates.add}
                        employee={this.state}
                        handleChange={this
                        .handleChange
                        .bind(this)}
                        handleSubmit={this
                        .handleSubmit
                        .bind(this)}/>
                </div>
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END EMPLOYEE ADD PAGE

// EXPORT EMPLOYEE ADD PAGE
export default EmployeeAdd;
