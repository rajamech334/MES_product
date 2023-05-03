import React, { Component } from 'react';
import logo from '../Logo/logo.svg';
import './OPcard.css';
// Test
class OPcard extends Component {
  render() {
    return (
      <div className='card'>
        <img src={logo} alt='Icon'/>
        <p className='OPnumber'>OP No.:<strong>{this.props.OPnumber}</strong></p>
        <p className='Description'>OP Des.:<strong>{this.props.Description}</strong></p>
       </div>
    )
  }
}

export default OPcard