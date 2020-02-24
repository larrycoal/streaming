import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './GoogleAuth'



const Header = () => {
    return (
        <div className="ui secondary pointing menu ">
            <Link to="/" >
                <h3 className='active item'>Streams </h3>
            </Link>
            <Link to="/new" >
                <h3 className="item">All streams</h3>
            </Link>
            <div className='right menu '>
                <div className="item">
                    <Auth />
                </div>
            </div>
        </div>
    )
}

export default Header