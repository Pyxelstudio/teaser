import React from 'react'
import '../styles/Footer.css';
import email from '../assets/Icons/email.svg';
import instagram from '../assets/Icons/instagram.svg';
import whatsapp from '../assets/Icons/whatsapp.svg';
import behance from '../assets/Icons/behance.svg';
import mobile_email from '../assets/Icons/mobile_email.svg';
import mobile_whatsapp from '../assets/Icons/mobile_whatsapp.svg';
import mobile_instagram from '../assets/Icons/mobile_instagram.svg';
import mobile_behance from '../assets/Icons/mobile_behance.svg';

const Footer = () => {

    const goTo = (e)=> {
        window.scroll(0, document.querySelector(e).offsetTop - 150)
    }
    
    const handleEventClick = (e)=>{
        e.preventDefault();
        goTo(e.target.getAttribute('href'));
    }
  return (
    <div className='Footer'>
        <div className='Footer-container'>
            <div className='items'>
                <h2>Contact</h2>
                <p>Téléphone: +212 680746019</p>
                <p>Email :  contact@newpyxel.com</p>
                <p>Instagram : newpyxel</p>
            </div>
            <div className='items'>
                <h2>Adresse</h2>
                <p>Rue 75, Sidi Maarouf -<br />
                Casablanca - Maroc </p>
                <p><a className='local' target='_blank' href="https://goo.gl/maps/j9fs2HesR2wroKc19">Localisation</a></p>
                <div className='icons footer__nomobile'>
                    <a className='social_icon' target='_blank' href='https://mailxto.com/0abxcv'><img src={email} alt="email" /></a>
                    <a className='social_icon' target='_blank' href='https://www.instagram.com/newpyxel/?hl=fr'><img src={instagram} alt="instagram" /></a>
                    <a className='social_icon' target='_blank' href='https://api.whatsapp.com/message/U2TWXMAJCHOBF1?autoload=1&app_absent=0'><img src={whatsapp} alt="whatsapp" /></a>
                    <a className='social_icon' target='_blank' href='https://www.behance.net/newpyxel'><img src={behance} alt="behance" /></a>
                </div>
                <div className='copyright footer__nomobile'>
                    <p>All Rights Reserved — 2024 &copy; New Pyxel.</p>
                    <p>Made with Figma & Love</p>
                </div>
            </div>
            <div className='items footer__nomobile'>
                <h2>Plan du site</h2>
                <div className='items__links'>
                    <a href='#Acceuil' onClick={handleEventClick}>Accueil</a>
                    <a href='#Projects'  onClick={handleEventClick}>Projets</a>
                    <a href='#Services'  onClick={handleEventClick}>Services</a>
                    <a href='#Team'  onClick={handleEventClick}>A propos</a>
                    <a href='#Contact'  onClick={handleEventClick}>Contact</a>
                </div>
            </div>
        </div>
        <div className='bottom_icons footer__nodesktop'>
                <a className='social_icon' target='_blank' href='https://mailxto.com/0abxcv'><img src={mobile_email} alt="email" /></a>
                <a className='social_icon' target='_blank' href='https://www.instagram.com/newpyxel/?hl=fr'><img src={mobile_instagram} alt="instagram" /></a>
                <a className='social_icon' target='_blank' href='https://api.whatsapp.com/message/U2TWXMAJCHOBF1?autoload=1&app_absent=0'><img src={mobile_whatsapp} alt="whatsapp" /></a>
                <a className='social_icon' target='_blank' href='https://www.behance.net/newpyxel'><img src={mobile_behance} alt="behance" /></a>
        </div>
        <div className='copyright footer__nodesktop'>
                    <p>All Rights Reserved — 2024 &copy; New Pyxel.</p>
                    <p>Made with Figma & Love</p>
        </div>
    </div>
  )
}

export default Footer;