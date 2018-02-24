import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";

// HOME PAGE
class Home extends Component {
    // RENDER
    render() {
        // RETURN
        return (
            <div className="container-fluid text-center">
                <Jumbotron />
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END HOME PAGE

// EXPORT HOME PAGE
export default Home;