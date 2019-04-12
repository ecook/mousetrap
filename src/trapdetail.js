import React, { useState, useEffect } from "react";
import { Modal, Button, Alert, Image } from "react-bootstrap";
import { Redirect } from "react-router";
import getPost from "./promises/get-post";
import Comments from "./comments";

export default ({match}) => {

    const [show, setShow] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState("");

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        let ignore = false;

        getPost(match.params.id).then(data => {
            if(!ignore) {
                setPost(data);
            }
        }, (err) => {
            setError(err.message);
        })


        return () => { ignore = true };
    }, [post])

    if(show) {
        return (
            <React.Fragment>
            { error ? (<Alert variant="danger" >{error}</Alert> ) : null }
            <Modal.Dialog size="lg">
                <Modal.Header closeButton onHide={handleClose}>
                <Modal.Title>Detailed view of {match.params.id}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Image width="200px" src={post.imageSource} />
                        Name: {post.name}
                        Author: {post.author}
                        Description: {post.description}
                        Stars: ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Comments comments={post.comments || []} />
                    </Modal.Footer>
            </Modal.Dialog>
            </React.Fragment>
        ) 
    } else {
        return (
            <Redirect to="/" />
        )
    }

}