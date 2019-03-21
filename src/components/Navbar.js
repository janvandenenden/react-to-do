import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


const NavBar = (props) => {
    console.log(props)
    // setTimeout(() =>{
    //     props.history.push('/about')
    // }, 1000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="" className="brand-logo">Poke's Times</a>
                <ul className="right">
                    <li className="collection-item"><Link to="/">Home</Link></li>
                    <li className="collection-item"><Link to="/Todos">Todos</Link></li>
                    <li className="collection-item"><Link to="/About">About</Link></li>
                    <li className="collection-item"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)