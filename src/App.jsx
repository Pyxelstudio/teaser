import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css';
import Desktop from './Components/Desktop';
import Mobile from './Components/Mobile';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    setIsMobile(()=> window.matchMedia('(max-width: 768px)').matches);
    window.addEventListener('resize', ()=> setIsMobile(()=> window.matchMedia('(max-width: 768px)').matches))
    return ()=>{
      window.removeEventListener('resize', ()=> setIsMobile(()=> window.matchMedia('(max-width: 768px)').matches))
    }
 }, []);
  return (
    <div className="App">
      { isMobile ? <Mobile /> : <Desktop />}
    </div>
  )
}

export default App
