import React, {Component} from "react";
// COMPONENTS
import Form from "../../components/Form";
// HELPERS
import EmployeeModel from "../../helpers/models/EmployeeModel";
import FormStates from "../../helpers/FormStates";

// FORM CONTAINER STYLES
const formContainerStyle = {
    boxShadow: "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgb" +
            "a(0,0,0,0.3)",
    backgroundColor: "#F6F6F6",
    border: "black",
    padding: "0.5em 0.75em 0.625em"
}; // END CONTIANER STYLES

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
            <div className="container-fluid">
                <h1>
                    Add Employee
                </h1>
                <div className="col-xs-10 col-sm-8 col-md-6" style={formContainerStyle}>
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
