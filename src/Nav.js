import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className="nav nav__black">
        <div className="nav__contents">
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                alt="netflix logo"
            />

            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="netflix logo"
            />
        </div>
    </div>
    
  )
}

export default Nav
