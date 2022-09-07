import React from 'react'
import '../Styles/Config.css'
import { useState } from 'react';
import confirm from '../images/confirm.svg'
import editButton from '../images/editButton.svg'

const Configuration = ({area,setArea}) => {
    const [input,setInput] = useState(area);
    const [diff, setDiff] = useState(-200);
    const [canEdit, setCanEdit] = useState(false);


    const handleChange=(e)=>{
        setInput(e.target.value);
        
    }

    const handleClick = ()=>{
        if(canEdit){
            setDiff(input - 3200);
        }
        setCanEdit(!canEdit);
        setArea(input);
    }

  return (
    <div className='container'>
        <h1>Configuring Your Office</h1>
        <p>Based on your design preference and your office area below is a configuration for your space.</p>
        <div className='calculator'>

            <div className='input'>
                <h1>Total Area<span> (SFT)</span></h1>
                <div className='inputHandle'>
                    {canEdit? <input name='area' type="number" value={input} onChange={(e)=>handleChange(e)}/>:<p>{input}</p>}
                    {<img src={!canEdit? editButton: confirm } alt='edit' onClick={handleClick}/>}
                </div>
                
            </div>
            <div className='result'>
                <div className='constraint'>
                    <span>3200</span>
                </div>
                <div className='diff'>
                    <span className={diff<0?"diffRes positive":"diffRes negative"}>{diff}</span>
                </div>
            </div>
        </div>
        <div className={diff<0 ||diff===0?"feedback positive":"feedback negative"}>
            {<span>{diff? diff<0?"You still have some area to cover":"You have exceeded the area limit":"Alright"}</span>}
        </div>
    </div>
  )
}

export default Configuration