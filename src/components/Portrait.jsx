import React, {useEffect} from 'react'
import '../styles/Portrait.css';
import anime from 'animejs';


const leftAnimationEffect = (isSelected) => {
  if (isSelected) {
    anime({
      targets: '.Portrait img',
      translateX: [-document.querySelector('.Portrait').offsetWidth +
      document.querySelector('.Portrait img').offsetWidth, 0],
      duration: 1000,
    })

    anime({
      targets: '.Portrait__text',
      translateX: [document.querySelector('.Portrait').offsetWidth -
    document.querySelector('.Portrait__text').offsetWidth, 0],
    })
  }
  else 
  {
    anime({
      targets: '.Portrait img',
      translateX: [0, document.querySelector('.Portrait').offsetWidth - 
      document.querySelector('.Portrait img').offsetWidth],
      duration: 1000,
    })

    anime({
      targets: '.Portrait__text',
      translateX: [0, document.querySelector('.Portrait').offsetWidth + 
    document.querySelector('.Portrait__text').offsetWidth],
    duration: 1000,
    })
  }
}

const rightAnimationEffect = (isSelected) => {
  if (isSelected) {
    anime({
      targets: '.Portrait img',
      translateX: [document.querySelector('.Portrait').offsetWidth -
      document.querySelector('.Portrait img').offsetWidth, 0],
      duration: 1000,
    })

    anime({
      targets: '.Portrait__text',
      translateX: [-document.querySelector('.Portrait').offsetWidth +
    document.querySelector('.Portrait__text').offsetWidth, 0],
    duration: 1000,
    })
  }
  else 
  {
    anime({
      targets: '.Portrait img',
      translateX: [0, document.querySelector('.Portrait').offsetWidth -
      document.querySelector('.Portrait img').offsetWidth],
      duration: 1000,
    })

    anime({
      targets: '.Portrait__text',
      translateX: [0,- document.querySelector('.Portrait').offsetWidth +
    document.querySelector('.Portrait__text').offsetWidth],
    })
  }
}

const Portrait = ({isSelected, orderImage, orderText, title, text, image}) => {

  useEffect(()=>{
    if (orderImage === 1){
      rightAnimationEffect(isSelected);
    }
    else if (orderImage === 2)
    {
      leftAnimationEffect(isSelected);
    } 

  }, [isSelected, orderImage]);

  return (
    <div className='Portrait'>
      <img src={ image } alt='protrait image' style={{order: orderImage}} />
      <div className='Portrait__text' style={{order:orderText}}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Portrait;