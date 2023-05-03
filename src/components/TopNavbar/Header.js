import React from 'react'
import './Header.css'

function Header(props) {
  return (
      
        <p className='Header'><strong>{props.name}</strong></p>
     );
  }


export default Header