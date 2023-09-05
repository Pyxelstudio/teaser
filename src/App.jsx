import { useState, useEffect } from 'react'
import './App.css';
import './styles/banner.css';
import './styles/projects.css';
import './styles/services.css';

import Navbar from './components/Navbar'
import Stars from './components/Stars';
import faitMaisonR from './assets/images/faitMaisonR.png';
import hairlyR from './assets/images/hairlyR.png';
import foodinoR from './assets/images/foodinoR.jpg';
import stratgy from './assets/images/strategy.png';
import uiux from './assets/images/uiux.png';
import video from './assets/images/video.png';
import branding from './assets/images/branding.png';
import regiaR from './assets/images/regiaR.png';
import Service from './components/Service';
import Team from './components/Team';
import Form from './components/Form';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect (()=>{
    if (window.matchMedia('(max-width:1000px)').matches)
    setIsMobile(true);
  else
    setIsMobile(false);
    window.addEventListener('resize', ()=> {
      if (window.matchMedia('(max-width:1000px)').matches)
        setIsMobile(true);
      else
        setIsMobile(false);
    })
    return ()=>{
      window.removeEventListener('resize', () => {
        if (window.matchMedia('(max-width:1000px)').matches)
          setIsMobile(true);
        else
          setIsMobile(false);
      })
    }
  }, []);
  return (
    <>
    <div className="App">
      <Navbar />
      <div  className="banner">
        <h1 id="Acceuil" >NEW PYXEL,<br />AGENCE DE<br/>communication
        {!isMobile ?
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0365 36L13.071 27.0183C12.1217 25.2657 10.6613 23.8783 8.98174 22.929L0 18.0365L8.98174 13.071C10.7343 12.1217 12.1217 10.6613 13.071 8.98174L17.9635 0L22.929 8.98174C23.8783 10.7343 25.3387 12.1217 27.0183 13.071L36 17.9635L27.0183 22.929C25.2657 23.8783 23.8783 25.3387 22.929 27.0183L18.0365 36Z" fill="white"/>
    </svg>
:
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.51521 15L5.44625 11.2576C5.05071 10.5274 4.44219 9.94929 3.74239 9.55375L0 7.51521L3.74239 5.44625C4.47261 5.05071 5.05071 4.44219 5.44625 3.74239L7.48479 0L9.55375 3.74239C9.94929 4.47261 10.5578 5.05071 11.2576 5.44625L15 7.48479L11.2576 9.55375C10.5274 9.94929 9.94929 10.5578 9.55375 11.2576L7.51521 15Z" fill="white"/>
    </svg>
    }
</h1>
        <div className="flex">
          <h2 className="text">Nous somme une agence de communication qui donne vie à vos
idées, raconte vos histoires et renforce votre visibilité sur le marché.</h2>
          <div className="btn-box">
            <a href="#Team">
                Apropos
            </a>
          </div>
        </div>
      </div>
      <Stars  id="Projects" title={<>Jetez un coup d’Oeil sur <br />
nos realisations</>}/>
      <div className='projects'>
        <div className='pic a'>
          <img src={foodinoR} alt='pyxel projects' />
        </div>
        <div className='pic b'>
          <img src={hairlyR} alt='pyxel projects' />
        </div>
        <div className='pic c'>
          <img src={faitMaisonR} alt='pyxel projects' />
        </div>
        <div className='pic d'>
          <img src={regiaR} alt='pyxel projects' />
        </div>
      </div>
      <Stars id='Services' title={<>Nos Services</>}/>
      <div className='services' >
        <Service title='WEB Design' imageSource={branding}
          className='cube sa'
        />
        <Service title='ui/ux design' imageSource={uiux} 
        className='rectangle sb' />
        <Service title='Vidéographie et Photographie' imageSource={video} 
        className='rectangle sc' />
        <Service title='Marketing Digital' imageSource={stratgy}
          className='cube sd'
        />
 
      </div>
      <Stars  id="Team" title={<>Faisons connaissance</>}/>
      <Team />
      <Stars id="Contact" title={<>nous contacter</>} />
      <Form  />
      <Stars id='Clients' title={<>nos clients</>} />
      <Clients />
    </div>
    <Footer />
    </>
  )
}

export default App

