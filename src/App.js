import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Dropdown from './Components/Dropdown';
import NewProject from './Components/NewProject';
import {projectsData} from './Utils/data';
import { useState } from 'react';
import ProgressBar from './Components/ProgressBar';
function App() {

  const [projectsList, setprojectsList] = useState(projectsData);

  const addNewProject = (project)=>{
    const size = projectsList.length
    const newProject = {id: projectsList[size-1].id + 1,...project}
    setprojectsList([...projectsList,newProject]);
    console.log("Final Projects List:",projectsList);
}
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
          {/* SUB-HEADER WITH DROPDOWN AND NEW PROJECT */}
            
            <div className='subHeader'>
            {/* DROPDOWN */}
            <Dropdown projectsList={projectsList}/>

            {/* NEW PROJECT */}
            <NewProject addNewProject={addNewProject}/>
            </div>
            
          {/* MAIN CONTENT */}

          <div className='content'>
            <div className='progressBar'>
                  {/* PROGRESS TAB */}
                  <ProgressBar/>
            </div>

            {/* SPLIT */}
          {/* LEFT PANEL - SET AREA */}
          {/* RIGHT PANEL - CARDS */}
          </div>
        
        
        </div>
      </div>
        
        

      
    </div>
  );
}

export default App;
