import React from "react"

function Clickcard(props) {
    return(
          props.shuffle(props.cards).map(characters =>(
          <div key = {characters.id} className="card">
        <div  className="img-container"> 
          <img onClick= {props.handleClick} className= "cardImage" alt={characters.name} src={characters.image} fluid="true" />
        </div>
        </div>
        ))
  

    )
}
export default Clickcard;