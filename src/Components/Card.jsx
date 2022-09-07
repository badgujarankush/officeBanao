import React, { useState } from 'react'
import '../Styles/Card.css'
import blankImage from '../images/blankImage.svg';

const Card = ({name,desc}) => {
    const [count, setCount] = useState(0);
    const decrease = ()=>{
        setCount(count-1);
    }
    const increase = ()=>{
        setCount(count+1);
    }
  return (
    <div className='itemCard'>
        <div className='image'>
            <img src={blankImage} alt={name}/>
        </div>
        <div className='header'>
            <h1>{name}</h1>
            <div className='counter'>
                <div className='handle inc' onClick={decrease}>-</div>
                <div className='handle val'>{count}</div>
                <div className='handle dec' onClick={increase}>+</div>
            </div>
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default Card