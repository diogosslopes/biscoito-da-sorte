import React from "react";

function Image() {

    const cookie = new URL("../images/biscoito.png", import.meta.url)

    return(
        <div>
            <img alt="cookie" src={cookie} />
            
        </div>
    )
}

export default Image