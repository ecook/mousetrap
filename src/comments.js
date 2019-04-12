import React from "react";

export default (props) => {
    return (
        <React.Fragment>
            <h3>Comments</h3>
            <ul>
            { props.comments && props.comments.map((comment, index) => (
                <li key={index}>
                    <ul>
                        <li>{comment.author}</li>
                        <li>{comment.datetime}</li>
                        <li>{comment.comment}</li>
                    </ul>
                </li>
            )) }
            </ul>
        </React.Fragment>
    )
}