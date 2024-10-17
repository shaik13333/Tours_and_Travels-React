import React from "react";
import "./Nav.css"

class Nav extends React.Component{
    render(){
        return(
            <>
                <div id="nav-left">
                <span>QTrip</span>
                    <div id="nav-right">
                        <a id="a">Home</a>
                        <a id="a">Reservations</a>
                        <button id="login-btn"><a href="#">Login Here</a></button>
                        <button id="reg-btn"><a href="#">Register</a></button>
                    </div>
                </div>
            </>
        )
    }
}
export default Nav