import React from "react";

const Sentences = (props) =>{

    console.log(props)

    return (
        <div className="sentence">
            <p>{props.sentence}</p>
        </div>
    )
}

export default Sentences