import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <div className="App">
    {/* Side Bar */}
    <div className='sideBar'>
    <Navbar/>
    </div>
    
      
      {/* MAIN DASHBOARD */}
      <div className='main'>
      {/* HEADER */}
        <Header/>
      

        <div className='mainContent'>
          {/* SUB-HEADER WITH OPTIONS */}
            {/* DROPDOWN */}
            <Dropdown/>
          {/* NEW PROJECT */}
        </div>
      </div>
        
        

      {/* MAIN CONTENT */}
        {/* PROGRESS TAB */}
        {/* SPLIT */}
          {/* LEFT PANEL - SET AREA */}
          {/* RIGHT PANEL - CARDS */}
    </div>
  );
}

export default App;
