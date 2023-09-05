
import '../styles/Clients.css';
import { useEffect, useState } from 'react';
import space from '../assets/clients_logos/space.png';
import safarspot from '../assets/clients_logos/safarspot.svg';
import maison from '../assets/clients_logos/maison.png';
import foodino from '../assets/clients_logos/foodino.svg';
import cfmd from '../assets/clients_logos/cfmd.png';
import smockyBurgers from '../assets/clients_logos/smockyburgers.png';
import anime from 'animejs';

const Clients = ({id}) => {
    let animate = false;
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {

        if (!animate)
        {
            setTimeout(() => {
                anime({
                    targets: '.Clients-container',
                    translateX: (an)=>{
                        return [document.querySelector('.Clients').offsetWidth - (isMobile ? 130  : 80), - parseInt(getComputedStyle(an).width)];
                    },
                    duration: isMobile ? 25000 : 15000,
                    easing: 'linear',
                    loop: true,
                });
            }, 500);
            animate = true;
        }
    }, []);
    useEffect(() => {
        if (window.matchMedia('(max-width: 520px)').matches)
            setIsMobile(true);
        else
            setIsMobile(false);
        window.addEventListener('resize', (e) => {
            if (window.matchMedia('(max-width: 520px)').matches)
                setIsMobile(true);
            else
                setIsMobile(false);
        })
        return () => {
            window.removeEventListener('resize', (e) => {
                if (window.matchMedia('(max-width: 520px)').matches)
                    setIsMobile(true);
                else
                    setIsMobile(false);
            })
        }
    }, []);
  return (
    <div id={id} className='Clients'>
        <div className='Clients-container'>
            <img src={space} alt='space' />
            <img src={safarspot} alt='safarspot' />
            <img src={maison} alt='maison' />
            <img src={foodino} alt='foodino' />
            <img src={cfmd} alt='cfmd' />
            <img src={smockyBurgers} alt='smocky burgers' />
        </div>
    </div>
  )
}

export default Clients;