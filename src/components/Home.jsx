import React from "react"
import {Link} from "react-router-dom"

function Home(){
    
    return  (
            <div className ="home-div">
                <div className="one-div">
                    <Link to="/beers"><img src ="/assets/beers.png"></img></Link>
                    <h1>All beers</h1>

                </div>

                <div className="one-div">
                    <Link to="/random-beer"><img src ="/assets/random-beer.png"></img></Link>
                    <h1>Random beer</h1>
                </div>

                <div className="one-div">
                    <Link to="/new-beer"><img src ="/assets/new-beer.png"></img></Link>
                    <h1>New beer</h1>
                </div>
            </div>
            )
}

export default Home