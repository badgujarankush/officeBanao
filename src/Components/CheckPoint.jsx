import React from 'react'
import '../Styles/CheckPoint.css'
import check from '../images/check.svg'

const CheckPoint = ({complete}) => {
  return (
    <div className='step'>
        <div className='outerRing'>
        {complete && <img src={check} alt='check'/>}
            {/* <div className={complete?'check yes':'check'}></div> */}
        </div>
    </div>
  )
}

export default CheckPoint