import React from "react";
import { NavDropdown, Image } from "react-bootstrap";

export default (props) => {

    const handleSelect = (eventKey) => {
        if(eventKey === "logout") {
            props.dispatch({ type: 'logout' })
        }
    }

    return (
        <React.Fragment>
            <span>hello {props.profile.login}</span> 
            <Image className={`avatar ${props.profile.avatar}`}  roundedCircle />
            <NavDropdown title="" id="nav-dropdown"  onSelect={k => handleSelect(k)}>
                {props.profile.isAdmin && <NavDropdown.Item eventKey="login">user management</NavDropdown.Item> }
                <NavDropdown.Item eventKey="profile">my Profile</NavDropdown.Item>
                <NavDropdown.Item eventKey="logout">Logout</NavDropdown.Item>
            </NavDropdown>
        </React.Fragment>
    )
}