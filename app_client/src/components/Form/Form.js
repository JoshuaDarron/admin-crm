import React, {Component} from "react";
// IMPORT STATE FROM HELPERS FOLDER
import FormStates from "../../helpers/FormStates";

// FORM COMPONENT
class Form extends Component {
    // RENDER
    render() {
        let readOnly = false;

        if (this.props.state === FormStates.view) {
            readOnly = true;
        }
        // RETURN
        return (
            <div>
                <form>
                    {/* FIRST NAME */}
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-2 col-form-label">
                            First Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                readOnly={readOnly}
                                value={this.props.employee.firstName}
                                type="text"
                                className="form-control"
                                name="firstName"
                                placeholder="First Name..."
                                onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    {/* LAST NAME */}
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label">
                            Last Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                readOnly={readOnly}
                                value={this.props.employee.lastName}
                                type="text"
                                className="form-control"
                                name="lastName"
                                placeholder="Last Name..."
                                onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    {/* AGE */}
                    <div className="form-group row">
                        <label htmlFor="age" className="col-sm-2 col-form-label">
                            Age
                        </label>
                        <div className="col-sm-10">
                            <input
                                readOnly={readOnly}
                                value={this.props.employee.age}
                                type="text"
                                className="form-control"
                                name="age"
                                placeholder="Age..."
                                onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    {/* JOB TITLE */}
                    <div className="form-group row">
                        <label htmlFor="jobTitle" className="col-sm-2 col-form-label">
                            Job Title
                        </label>
                        <div className="col-sm-10">
                            <input
                                readOnly={readOnly}
                                value={this.props.employee.jobTitle}
                                type="text"
                                className="form-control"
                                name="jobTitle"
                                placeholder="Job Title..."
                                onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    {/* SUBMIT BUTTON */}
                    <div className="clearfix">
                        <button
                            onClick={this.props.handleSubmit}
                            className="btn btn-primary pull-right"
                            type="submit">
                            Create
                        </button>
                    </div>

                </form>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END FORM COMPONENT

// EXPORT FORM COMPONENT
export default Form;