import React, { useState } from 'react'

import '../Styles/Dropdown.css';
import arrow from '../images/arrow.svg'
const Dropdown = ({projectsList}) => {
    const [selected, setSelected] = useState(projectsList[0]);
    const [active, setActive] = useState(false);

    const handleClick=()=>{
        setActive(!active);
    }
    const handleSelect=(e)=>{
        setSelected(e);
        setActive(!active);
    }
  return (
    <div className='dropdown'>
        <div className='dropdownBtn drop' onClick={handleClick}>
        <div className='projectDetails'>
            <h1 className='projectName'>{selected.name}</h1>
            <div className='projectLocations'>
                <span className='id'>{selected.id}</span>
                <span className='location'>{selected.city}: {selected.area}</span>
            </div>
        </div>
        <img src={arrow} alt='arrow'/>
        </div>
        {active && <>
            <div className="dropdownList drop">
            {projectsList.map(item => (
              <div className="projectDetails menuItem" onClick={()=>handleSelect(item)}>
                <h1 className="projectName">{item.name}</h1>
                <div className='projectLocations'>
                <span className='id'>{item.id}</span>
                <span className='location'>{item.city}: {item.area}</span>
            </div>
              </div>
            ))}
          </div>
          
        </>}
        
    </div>
  )
}

export default Dropdown