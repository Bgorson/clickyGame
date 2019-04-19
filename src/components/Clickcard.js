import React from "react"

function Clickcard(props) {
    return(
        <div className="card">
        <div className="img-container">
          <img alt="test" src={props.image} />
        </div>
        <div className="content">
        </div>
        </div>

    )
}
export default Clickcard;