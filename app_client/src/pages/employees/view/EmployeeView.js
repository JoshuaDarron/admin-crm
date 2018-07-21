import React, { Component } from "react";
// import FormStates from "../../../helpers/FormStates";
// import Table from "../../../components/Table";
// import Form from "../../../components/Form"
// import EmployeeModel from "../../../helpers/models/EmployeeModel";

// import "./EmployeeView.css";

// const categoryName = ["View", "Edit", "First Name", "Last Name", "Age", "Job Title"];



class EmployeeView extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            employee: {}
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.gotoEdit = this.gotoEdit.bind(this);
    }; // END CONSTRUCTOR 

    // componentDidMount() {
    //     EmployeeModel.getOne(this.props.match.params.id)
    //     .then(resp => {
    //         this.setState({employee: resp.data});
    //     })
    //     .catch(err => console.error(err));
    // }; // END COMPONENT DID MOUNT

    // gotoEdit(e) {
    //     e.preventDefault();
    //     this.props.history.push(`/employees/edit/${this.props.match.params.id}`);
    // }; // END GO TO EDIT 

    // handleDelete(e) {
    //     e.preventDefault();
    //     EmployeeModel.delete(this.props.match.params.id)
    //     .then(resp => {
    //         console.log(resp);
    //         this.props.history.push("/employees");
    //     }).catch(err => console.error(err));
    // }; // END HANDLE DELETE

    render() {
        return (
            <div>
                <h1 class="page-header view-header">
                    View Employee
                </h1>
                {/* <Table 
                    category={categoryName}
                    employees={this.state.employees}/>

                <div className="col-md-8 col-md-offset-2">
                    <Form handleEdit={this.gotoEdit} 
                    formState={FormStates.view}
                    employee={this.state.employee}
                    handleDelete={this.handleDelete} />
                </div>  */}
            </div>
        ); // END RETURN
    }; // END RENDER 
}; // END EMPLOYEE COMPONENT


export default EmployeeView;