import React, {Component} from "react";
import Clickcard from "./Clickcard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import cards from "../cards.json"

class Clickygame extends Component {
    state= {
        wins: 0,
        topScore: 10
    }
handleClick = event =>{
    console.log(event.target)
}

render(){
    return (
        <div>
            <Navbar
            score = {this.state.wins}
            topScore= {this.state.topScore}/>
            <Jumbotron/>

            <Clickcard
            image = {cards[0].image}
            />
            <Clickcard
            image = {cards[0].image}
            />
            <Clickcard
            image = {cards[0].image}
            />

            <Footer/>
        </div>
    )
}
}
export default Clickygame;