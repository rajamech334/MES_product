import React, { Component } from 'react';
import OPCard from './OPcard';
import './Collection.css'

class Collection extends Component {
  render() {
    return (
      <div className='collection'>
        <OPCard OPnumber ='10' Description = 'Loading station -1'></OPCard>
        <OPCard OPnumber ='20' Description = 'Sorting station'></OPCard>
        <OPCard OPnumber ='30' Description = 'Transfer station'></OPCard>
        <OPCard OPnumber ='40' Description = 'Assembly station-1'></OPCard>
        <OPCard OPnumber ='50' Description = 'Packing station-1'></OPCard>
        <OPCard OPnumber ='60' Description = 'Unloading station'></OPCard>
     </div>
    )
  }
}

export default Collection