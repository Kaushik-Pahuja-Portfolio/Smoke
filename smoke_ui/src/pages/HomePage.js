import React from "react"
import {Link} from "react-router-dom"

function HomePage(){

    return(
        <>
        <h1>Home Page</h1>
        <Link to="/Players">Players</Link>
        <Link to="/Studios">Studios</Link>
        <Link to="/Games">Games</Link>
        </>
    )
}

export default HomePage;