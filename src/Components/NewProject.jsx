import React, { useState } from 'react';
import plus from '../images/plus.svg';
import '../Styles/NewProject.css';

const NewProject = ({addNewProject}) => {
    const [active,setActive] = useState(false);
    const [project, setProject] = useState({});
    const handleClick=()=>{
        setActive(!active);
    }
    const handleInput =(event)=>{
        setProject({...project,[event.target.name]:event.target.value});
        console.log(project);
    }
    const handleSubmit=()=>{
        if(project.name && project.area && project.city){
            addNewProject(project);
            setProject({});
            console.log("New project: ",project);
        }
        
        setActive(!active);
    }
  return (
    <>
    <div className='newProject'>
    <div className='createNew' onClick={handleClick}>
        <span>Start new Project</span>
        <img src={plus}/>
    </div>
    {active &&<>
        <div className='card'>
            {/* <form id='form' action=''> */}
                <div className="inputControl">
                <input type="text" name="name" placeholder="Project Name" id="projectName" onChange={handleInput}/>
                </div>
                <div className="inputControl">
                <input type="text" name="city" placeholder="City Name" id="cityName" onChange={handleInput}/>
                </div>
                <div className="inputControl">
                <input type="text" name="area" placeholder="Area Name" id="areaName" onChange={handleInput}/>
                </div>
                <button onClick={handleSubmit}>Add Project</button>
            {/* </form> */}
        </div>
    </>}
    </div>
    </>
  )
}

export default NewProject