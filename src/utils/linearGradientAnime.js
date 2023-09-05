
import {useRef, useEffect} from 'react';
import anime from 'animejs';

const useLinearGradientAnime = ()=>{
    const linearGradient = {
        degree: 90,
    }
    const ref = useRef(null);

    useEffect(() => {
        ref.current.addEventListener('mouseenter', (e)=>{
            anime({
                targets: linearGradient,
                degree: [linearGradient.degree, linearGradient.degree + 180],
                update : (anm)=>{
                    ref.current.style.backgroundImage = `linear-gradient(${anm.animations[0].currentValue}deg, #2C9BFF 0%, #D982FF 100%)`
                },
                duration: 600,
                round: 1,
                easing: 'linear'
            })
        });
        ref.current.addEventListener('mouseleave', (e)=>{
            anime({
                targets: linearGradient,
                degree: [linearGradient.degree, linearGradient.degree - 180],
                update : (anm)=>{
                    ref.current.style.backgroundImage = `linear-gradient(${anm.animations[0].currentValue}deg, #2C9BFF 0%, #D982FF 100%)`
                },
                duration: 500,
                round: 1,
                easing: 'linear'
            })
        });
        return ()=>{
            ref.current.removeEventListener('mouseenter', (e)=>{
                anime({
                    targets: linearGradient,
                    degree: [linearGradient.degree, linearGradient.degree + 180],
                    update : (anm)=>{
                        ref.current.style.backgroundImage = `linear-gradient(${anm.animations[0].currentValue}deg, #2C9BFF 0%, #D982FF 100%)`
                    },
                    duration: 600,
                    round: 1,
                    easing: 'linear'
                })
            });
            ref.current.removeEventListener('mouseleave', (e)=>{
                anime({
                    targets: linearGradient,
                    degree: [linearGradient.degree, linearGradient.degree - 180],
                    update : (anm)=>{
                        ref.current.style.backgroundImage = `linear-gradient(${anm.animations[0].currentValue}deg, #2C9BFF 0%, #D982FF 100%)`
                    },
                    duration: 500,
                    round: 1,
                    easing: 'linear'
                })
            });
        }
    });
    return ref;
}

export default useLinearGradientAnime;