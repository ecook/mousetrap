import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import getUser from "./promises/get-user";

export default (props) => {

    const [login, setLogin] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleUserChange = (e) => {
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        getUser(login)
        .then((data) => {
            if(data.login === login && data.password === password) {
                props.dispatch({ type: 'login', data: data })
                handleClose();
            } else {
                setError("invalid password");
            }
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleClose = () => {
        props.history.push("/");
    }

    return (
        <div>
            {error && <Alert variant="danger">{error} </Alert>}
            <Modal.Dialog>
                <Modal.Header closeButton onHide={handleClose}>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleLogin}>
                    <Modal.Body>
                        <Form.Group controlId="formBasicUser">
                            <Form.Label>user</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" onChange={handleUserChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onChange={handlePasswordChange}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                        <Button variant="primary" type="submit" >Login</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Dialog>
        </div>
    )
}