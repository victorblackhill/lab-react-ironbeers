import React from "react"
import {Link} from "react-router-dom"

function Home(){
    
    return  (
            <div>
                <div>
                    <Link to="/beers"><img src ="/assets/beers.png"></img></Link>
                </div>

                <div>
                    <Link to="/random-beer"><img src ="/assets/random-beer.png"></img></Link>
                </div>

                <div>
                    <Link to="/new-beer"><img src ="/assets/new-beer.png"></img></Link>
                </div>
            </div>
            )
}

export default Home