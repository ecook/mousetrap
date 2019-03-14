import React, { useState, useEffect } from "react";
import getPosts from "./promises/get-posts";
import { Alert, Table } from "react-bootstrap";


export default () => {

    const [ posts, setPosts ] = useState([]);

    const [ error, setError ] = useState("");

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data)
        }, (err) => {
            setError(err.message);
        })
    }, [posts])

    return (
        <React.Fragment>
            { error && <Alert variant="danger">error</Alert>}
        <h1>List</h1>
        <Table striped bordered>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            { posts.map(post => (
                <tr key={post.id}> 
                    <th>{post.id}</th>
                    <th><img width="100px" src={post.imageSource} alt="" /></th>
                    <th>{post.name}</th>
                    <th>{post.author}</th>
                    <th>{post.description}</th>
                </tr>
            ))}
            </tbody>
        </Table>
        </React.Fragment>
    )
}