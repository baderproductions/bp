import React from "react";
import logoBP from '../../logo.png';

class NotFound extends React.Component {

    render() {
        return (
            <div className="notfound-container">
                <img src={logoBP} alt="BADERproductions Logo"/>
                <h1>Page not found</h1>
                <p>The page you just tried to access was not found.</p>
            </div>
        );
    }
}

export default NotFound;