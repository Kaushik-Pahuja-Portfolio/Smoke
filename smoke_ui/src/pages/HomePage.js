import React from "react"
import {Link} from "react-router-dom"

function HomePage(){

    return(
        <>
        <h1>Home Page</h1>
        <Link to="/Players">Players</Link>
        <Link to="/Studios">Studios</Link>
        <Link to="/Games">Games</Link>
        <Link to="/xyz/1">something</Link>
        </>
    )
}

export default HomePage;