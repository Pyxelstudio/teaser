import React from 'react'
import '../styles/Service.css';

const Service = ({title, imageSource, className}) => {
  return (
    <div className={"Service " + className}>
        <img src={imageSource} alt='service image' />
        {
          /*
        <div className='wrapper'>
            <h2 className='header'>{title}</h2>
        </div>
       */
        }
    </div>
  )
}

export default Service;