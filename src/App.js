import './App.css';

import TopNavbar from './components/TopNavbar/TopNavbar';
import Collection from './components/OPcard/Collection';
import Header from './components/TopNavbar/Header';
// import Dropdown from './components/TopNavbar/Dropdown';
// import { HeatMap } from './components/HeatMap/HeatMap';

function App() {
  return (
    <div className="App">
     <TopNavbar></TopNavbar>
     <Collection className="collection"></Collection>
     <div className='Filter'>
       <Header name ='Zone Selection'></Header>
       <Header name ='Line selection'></Header>
     </div>
     <div>
      
     </div>
    </div>
  );
}

export default App;
