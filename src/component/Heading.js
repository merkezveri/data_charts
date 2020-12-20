import React from 'react'

function Heading(props) {
    return (
        <div className="text-center mb-4 pb-2 dashed">
            <h1 className="display-4">{props.heading}</h1>
            <p><strong>({props.source}, {props.date})</strong></p>
        </div>
    )
}

export default Heading