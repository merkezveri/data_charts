import React from 'react'

function Lead(props) {
    return (
        <div className="container mb-4">
            <div className="lead">
                <h5>{props.h5}</h5>
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export default Lead
