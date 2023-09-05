import React, {useContext, useReducer} from 'react'
import '../styles/FormInput.css';
import FormContext from '../../store';

const FormInput = ({placeholder, name, error}) => {
  const { dispatch } = useContext(FormContext);
  return (
    <div className='FormInput' style={{
      borderColor: error ? 'red' : '#7d7d7d',
    }}>
        <input type="text" placeholder={placeholder} onChange={
            (e)=>{
                dispatch({
                    type: 'ADD_INPUT',
                    payload: {
                        name: name,
                        value: e.target.value,
                    }
                });
            }
        } />
    </div>
  )
}

export default FormInput;