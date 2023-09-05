import React, {useState, useRef, useContext} from 'react';
import '../styles/FormCheckbox.css';
import FormContext from '../../store';
const FormCheckbox = ({label, name}) => {
  const [isChecked, setIsChecked] = useState(false);
  const { dispatch } = useContext(FormContext);
  const handleChange = () => {
        dispatch({
            type: 'ADD_INPUT',
            payload: {
                name: name,
                value: !isChecked,
          }});
          setIsChecked(!isChecked);
    }
  return (
    <div className='FormCheckbox'>
        <label >
            <div className={"FormCheckbox__checkbox" + (isChecked ? ' checked' : '')} onClick={
                ()=>{
                    handleChange();
                }
            }>
            </div>
            <p>{label}</p>
        </label>
    </div>
  )
}

export default FormCheckbox