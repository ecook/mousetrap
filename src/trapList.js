import React, { useState, useEffect } from "react";
import getPosts from "./promises/get-posts";
import { Alert, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {

    const [ posts, setPosts ] = useState([]);

    const [ error, setError ] = useState("");

    useEffect(() => {
        let ignore = false;

        getPosts().then((data) => {
            if(!ignore) {
                setPosts(data)
            }
        }, (err) => {
            setError(err.message);
        })
        
        return () => { ignore = true };
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
                
                <tr key={post.id} > 
                
                    <th>{post.id}  </th>
                    <th><Link to={`/detail/${post.id}`} ><img width="100px" src={post.imageSource} alt="" /></Link></th>
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