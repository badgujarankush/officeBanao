import './App.css'
import { Navbar, Header, Dropdown, NewProject,ProgressBar,Configuration, Chart, SpaceType,Card } from './Components';
import {projectsData, workSpace,cardData} from './Utils/data';
import { useState } from 'react';
function App() {

  const [projectsList, setprojectsList] = useState(projectsData);
  const [area,setArea] = useState(3000);
  const [selected, setSelected] = useState("");

  const addNewProject = (project)=>{
    const size = projectsList.length
    const newProject = {id: projectsList[size-1].id + 1,...project}
    setprojectsList([...projectsList,newProject]);
    console.log("Final Projects List:",projectsList);
}

  const handleArea = (input)=>{
    setArea(input);
  }

  const handleSelect =(e)=>{
      setSelected(e);
      console.log(selected);
  }
  console.log("Area Input:", area);
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
            <div className='split'>
              {/* LEFT PANEL - SET AREA */}
              <div className='left'>
                  {/* <h1>Configure Your Area</h1> */}
                  <Configuration area={area} setArea={handleArea}/>
                  <div className='visualizer'>
                    {/* CHART */}
                    <div className='graph'>
                    <Chart area={area}/>
                    </div>
                    
                    {/* Types of workspace */}
                    {/* <h1>Type of workspace</h1> */}
                    <div className='workSpaceType'>
                    {workSpace.map(item=>
                      <SpaceType title={item.name} color={item.color} tag={item.tag} handleSelect={handleSelect}/>
                    )}
                    </div>
                    
                  </div>
              </div>
              {/* RIGHT PANEL - CARDS */}
              <div className='right'>
                   {/* {selected?cardData.map(item=>
                      <Card  desc={item.desc} name={item.name}/>
                   ): cardData.filter(item=> item.tag ===selected)} */}
                   {cardData.map((item)=>item.tag.toLowerCase().includes(selected.toLowerCase())&&(<Card desc={item.desc} name={item.name}/>))}
              </div>
            </div>
  
          
          </div>
        
        <button className='end'>Proceed</button>
        </div>
      </div>
        
        

      
    </div>
  );
}

export default App;
