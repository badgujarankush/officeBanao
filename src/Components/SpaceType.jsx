import React from 'react'
import '../Styles/SpaceType.css'
const SpaceType = ({title,color,tag,handleSelect}) => {
  
  return (
    <div className="spaceType" onClick={() => handleSelect(tag)}>
        <div className='label' style={{background:color}}>
        </div>
        <div className='title'>
            {title}
        </div>
    </div>
  )
}

export default SpaceType