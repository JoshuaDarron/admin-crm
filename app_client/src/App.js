import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// HOME PAGES
import Home from "./pages/Home";
// EMPLOYEE PAGES
import EmployeeHome from "./pages/employees/EmployeeHome";
import EmployeeAdd from "./pages/employees/EmployeeAdd";
import EmployeeEdit from "./pages/employees/EmployeeEdit";
import EmployeeView from "./pages/employees/EmployeeView";

// APP STYLES
import './App.css';

// APP COMPONENT
class App extends Component {
  // RENDER 
  render() {
    // RETURN
    return (
      // ROUTES TO PAGES
      <div>
        <Router>
          <div>
            {/* NAVBAR COMPONENT */}
            <Navbar />
            {/* HOME PAGE */}
            <Route exact path="/" component={Home}/>
            {/* EMPLOYEE HOME PAGE */}
            <Route exact path="/employees" component={EmployeeHome}/>
            {/* EMPLOYEE ADD PAGE */}
            <Route exact path="/employee/add" component={EmployeeAdd}/>
            {/* EMPLOYEE EDIT PAGE */}
            <Route exact path="/employee/edit/:id" component={EmployeeEdit}/>
            {/* EMPLOYEE VIEW PAGE */}
            <Route exact path="/employee/view/:id" component={EmployeeView}/> 
            {/* FOOTER COMPONENT */}
            <Footer />
          </div>
        </Router>
      </div>
    ); // END RETURN 
  };  // END RENDER 
};  // END APP COMPONENT 

// EXPORT APP
export default App;
