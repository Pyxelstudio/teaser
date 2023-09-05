import {useEffect, useRef, forwardRef} from 'react'
import anime from 'animejs';
import '../styles/SvgLink.css';

const SvgLink =({width, height, selected, name, handleClick, fontSize}) => {
  const text = useRef();
  useEffect(()=>{
    if (selected)
    {
        anime({
            targets: text.current,
            scale: [1, 1.3],
            duration: 300,
            easing: 'easeInOutQuad',
        })
    }
    else{
        anime({
            targets: text.current,
            scale: [1.3, 1],
            duration: 300,
            easing: 'easeInOutQuad',
        })
    }
  }, [selected]);

  return (
    <svg ref={text} onClick={handleClick} className='SvgLink' width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
    <text fontSize={fontSize} fill={selected ? 'url(#selected)' : '#2C9BFF'} x="0" y="35" >{name}</text>
    <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="selected" x1="0" x2="100%" y1="0" y2="100%"  gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2c9bff"/>
                <stop offset="100%" stopColor='#D982FF' />
          </linearGradient>
      </defs>
  </svg>
  )
}

export default SvgLink;