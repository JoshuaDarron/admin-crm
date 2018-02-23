import React, {Component} from "react";
import axios from "axios";

class EmployeeAdd extends Component {

    // CONSTRUCTOR
    constructor(props) {
        // PROPS
        super(props);
        // STATE
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            jobTitle: ""
        }; // END STATE'
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }; // END STATE

    // HANDLE INPUT CHANGE
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }; // END HANDLE INPUT CHANGE

    // HANDLE SUBMIT
    handleSubmit(e) {
        e.preventDefault();
        console.log("submit", this.state)
        axios.post("/api/create", this.state)
            .then(resp => {
                console.log(this.state, resp.data);
                this.props.history.push("/employees");
            })
            .catch(err => {
                console.error(err);
            })

    }; // END HANDLE SUBMIT

    // POST EMPLOYEE
    postEmployee = () => {
        console.log(this.state);
    }; // END POST EMPLOYEE

    // RENDER COMPONENT
    render() {
        // RETURN THIS HTML TO RENDER
        return (
            <div className="row">
                <div className="col-xs-12 col-xs-10 col-xs-6">
                    <h2>
                        Enter Employee
                    </h2>
                    {/* FORM */}
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        {/* FIRST NAME */}
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">
                                First Name
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="input"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        {/* END FIRST NAME */}
                        {/* LAST NAME */}
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">
                                Last Name
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="input"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        {/* END LAST NAME */}
                        {/* AGE */}
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">
                                Age
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="input"
                                    className="form-control"
                                    placeholder="Age"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        {/* END AGE */}
                        {/* JOB TITLE */}
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">
                                Job Title
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="input"
                                    className="form-control"
                                    placeholder="Job Title"
                                    name="jobTitle"
                                    value={this.state.jobTitle}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        {/* END JOB TITLE */}
                        {/* SUBMIT */}
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-default">
                                    Create
                                </button>
                            </div>
                        </div>
                        {/* END SUMBMIT */}
                    </form>
                    {/* END FORM */}
                </div>
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END EMPLOYEE ADD
export default EmployeeAdd;