import React from "react";

export default ({match}) => {
    return (
        <React.Fragment>
            <h1>Detailed view of {match.params.id}</h1>
        </React.Fragment>
    )
}