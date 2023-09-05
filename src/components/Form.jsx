import React, { useEffect, useReducer, useState } from 'react'
import anime from 'animejs';
import '../styles/Form.css';
import FormCheckbox from './FormCheckbox';
import FormInput from './FormInput';
import useLinearGradientAnime from '../utils/linearGradientAnime';
import FormContext from '../../store';
import Reducer from '../reducers/Reducer';
const Form = ({id}) => {

 const ref = useLinearGradientAnime();
  const [inputErrors, setInputErrors] = useState({
    NomError: false,
    EmailError: false,
    TelError: false,
    MessageError: false,
  });

  const [progress, setProgress] = useState(0);
  const [state, dispatch] = useReducer(Reducer, {
    Nom: '',
    NomEntreprise: '',
    Telephone: '',
    Email: '',
    identiteVisuelle: false,
    creationContenu: false,
    socialMediaMarketing: false,
    siteWeb: false,
    appMobile: false,
    videoPromotionnel: false,
    autre: false,
    seoSea: false,
    message: '',
  });

  const sendForm = async (form) => {
    console.log(form);
    const toSend = {
        name: form.Nom,
        nameO: form.NomEntreprise,
        tel: form.Telephone,
        func: form.Fonction,
        email: form.Email,
        iv: form.identiteVisuelle,
        cdc: form.creationContenu,
        smm: form.socialMediaMarketing,
        sw: form.siteWeb,
        am: form.appMobile,
        vp: form.videoPromotionnel,
        autre: form.autre,
        seo: form.seoSea,
        msg: form.message,

      }
    const response = await fetch('https://pyxellapi.herokuapp.com/api/email/sendEmail', {
      method: 'POST',
      body: JSON.stringify(toSend),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log(response);
  }
  const handleClick = () => {
    setInputErrors({
        NomError: state.Nom === '' || state.Nom.length < 3,
        EmailError: state.Email === '' || state.Email.match(/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/) === null,
        TelError: state.Telephone === '' || state.Telephone.match(/^(\+2126|06)\d{8}$/) === null,
        MessageError: state.message === '',
    });
    // INTEGRATION API  
      if (state.Nom !== '' && state.Email !== '' && state.Telephone !== '' && state.message !== '') {
        sendForm(state);
      }
  }
  return (
    <FormContext.Provider value={{
        dispatch: dispatch,
    }}>
    <div id={id} className='Form'>
        <div className='Form__container'>
            <FormInput placeholder="Nom*" name="Nom" error={inputErrors.NomError}  />
            <FormInput placeholder="Nom entreprise" name="NomEntreprise"  />
        </div>
        <div className='Form__container'>
            <FormInput placeholder="Téléphone*" name="Telephone" error={inputErrors.TelError}/>
            <FormInput placeholder="Fonction" name="Fonction"/>
        </div>
        <div className='Form__container'>
            <FormInput placeholder="Email*" name="Email" error={inputErrors.EmailError} />
        </div>
        <div className='Form__checkboxes'>
            <h2>Object du contact</h2>
            <div className='Checkbox__grid'>
            <FormCheckbox label="Identité Visuelle" name="identitéVisuelle"/>
            <FormCheckbox label="Création de contenu" name="creationContenu"/>
            <FormCheckbox label="Social Media Marketing" name="socialMediaMarketing"/>
            <FormCheckbox label="Site WEB" name="siteWeb"/>
            <FormCheckbox label="App Mobile" name="appMobile"/>
            <FormCheckbox label="Vidéo promotionnelle" name="videoPromotionnel"/>
            <FormCheckbox label="SEO/SEA" name="seoSea"/>
            <FormCheckbox label="Autre" name="autre"/>
            </div>     
        </div>
        <div className='Form__container'>
            <FormInput placeholder="Votre message*"  name="message" error={inputErrors.MessageError}/>
        </div>
        <div className='Checkbox__button_container'>
            <button onClick={handleClick} ref={ref} className='Checkbox__button'>{
                progress === 0 ? 'Envoyer':
                progress === 1 ? 'en progress...':
                progress === 2 ? 'succeeded':
                progress === 3 ? 'error!': null
            }</button>
        </div>
    </div>
    </FormContext.Provider>
  )
}

export default Form;