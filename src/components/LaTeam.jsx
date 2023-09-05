import React, { useState, useEffect } from 'react'
import Profile from './Profile'
import '../styles/LaTeam.css';
import ahmed from '../assets/images/ahmed.png';
import ayoub from '../assets/images/ayoub.png';
import mohamed from '../assets/images/mohamed.png';
import anime from 'animejs';

const LaTeam = ({current}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    window.addEventListener('resize', (e)=>{
      if (window.matchMedia('(max-width: 720px)').matches)
        setIsMobile(true);
      else
        setIsMobile(false);
    })

    if (window.matchMedia('(max-width: 720px)').matches)
      setIsMobile(true);
    else
      setIsMobile(false);
    return ()=>{
      window.removeEventListener('resize', (e) => {
        if (window.matchMedia('(max-width: 720px)').matches)
          setIsMobile(true);
        else
          setIsMobile(false);
      })
    }
    }, [current]);

    useEffect(()=>{
      anime({
        targets: '.LaTeam .Profile',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',

      })
    }, [current]);
  return (
    <div className='LaTeam'>
        <Profile image={ahmed} 
        />
        <Profile image={ayoub}
        />
        {
        !isMobile && <Profile image={mohamed}
        />
        }
    </div>
  )
}

export default LaTeam