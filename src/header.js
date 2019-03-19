import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import LoggedIn from "./loggedin";
import { Link } from "react-router-dom";

export default (props) => {

    return (
        <Row className="App">
            <Col md={1}>
                <img src="./images/bettermouseicon-2.png" width="100px" alt="" />
            </Col>
            <Col md={9}>
                <Link to="/" >
                <h1 style={{fontSize: "72px"}}>Better Mousetrap</h1>
                </Link>
            </Col>
            <Col md={2} style={{textAlign: "right", padding: "30px"}}>
            { props.profile.isLoggedIn ? (<LoggedIn dispatch={props.dispatch} profile={props.profile} />) : (<Link to={"/login/"}><Button variant="warning">Login</Button></Link>) }
                
            </Col>
        </Row>
    )
}