import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/Team.css';
import LaTeam from './LaTeam';
import Portrait from './Portrait';
import SvgLink from './SvgLink';
import notreVision from '../assets/images/notre_vesion.png';
import lagence from '../assets/images/lagence.png';

const Team = ({id}) => {
  const [isMobile, setIsMobile] = useState(0);
  const links = [
    {
      width: [140, 60],
      name: 'La Team',
    },
    {
      width: [150, 60],
      name: "L'agence",
    },
    {
      width: [300, 120],
      name: "Notre philosophie",
    }
  ];
  const [current, setCurrent] = useState(0);
  useEffect(()=>{
    const translate = {
      x: parseInt(document.querySelector('.Team svg rect').getAttribute('x'))
    }
    anime ({
      targets: translate,
      x: [translate.x, document.querySelectorAll('.SvgLink')[current].getBoundingClientRect().left - 
      document.querySelector('.Team header:nth-child(2)').getBoundingClientRect().left - (isMobile ? 10: 10)],
      duration: 500,
      easing: 'easeOutCubic',
      update: (ani)=>{
        return document.querySelector('.Team svg rect').setAttribute('x', ani.animations[0].currentValue);
      }
    });
  }, [current]);

  const interval = useRef(null);

  useEffect(()=>{
      interval.current = setInterval(() => {
        setCurrent(current => (current + 1) % 3);
      }, 5000);
      return ()=>{
        clearInterval(interval.current);
      }
  }, [])

  useEffect(()=>{
    if (window.matchMedia('(max-width: 1000px)').matches)
    setIsMobile(1);
  else
    setIsMobile(0);
    window.addEventListener('resize', (e)=>{
      if (window.matchMedia('(max-width: 1000px)').matches)
        setIsMobile(1);
      else
        setIsMobile(0);
    })
    return ()=>{
      window.removeEventListener('resize', (e) => {
        if (window.matchMedia('(max-width: 1000px)').matches)
          setIsMobile(1);
        else
          setIsMobile(0);
      })
    }
    }, []);
  return (
    <div id={id} className='Team'>
        <header>
           {
            links.map((element, index) => (<SvgLink svgRef={links[current].ref} key={index} width={element.width[isMobile]}
            height={isMobile ? '45' : '50'} name={element.name} selected={current === index} handleClick={()=>{
              clearInterval(interval.current);
              setCurrent(index);
              interval.current = setInterval(() => {
                setCurrent(current => (current + 1) % 3);
            }, 5000);
            }} fontSize={!!isMobile ?  12 : 30 } />))
           }
        </header>
        <header>
          <svg width='100%' height='4'  xmlns="http://www.w3.org/2000/svg">
           <rect  rx={2} y={0} width={links[current].width[isMobile] + 10} height={isMobile ? 2 : 3} fill='url(#MyGradient)' />
           <defs>
        <linearGradient id="MyGradient">
          <stop offset="5%" stopColor="#2C9BFF" />
          <stop offset="95%" stopColor="#D982FF" />
        </linearGradient>
      </defs>
          </svg>
        </header>
        {current === 0 ? <LaTeam current={current} /> : 
        current === 2 ? <Portrait  orderImage={1} orderText={2}
        title=""
        text="Chaque projet est une opportunité de créer quelque chose
d'exceptionnel. Notre approche collaborative et notre passion pour
l'innovation se reflètent dans chaque pixel que nous concevons et dans
chaque mot que nous écrivons."
        image={notreVision}
        isSelected= {current === 2}
        />
        : <Portrait  orderImage={2} orderText={1} isSelected={current === 1}
        title=""
        text="Fondée par deux jeunes designers passionnés par l'art visuel,
New Pyxel est une agence de communication qui a pour but de de
donner vie à vos idées, de raconter vos histoires et d'amplifier votre
présence sur le marché."
        image={lagence}
        />}
    </div>
  )
}

export default Team;
