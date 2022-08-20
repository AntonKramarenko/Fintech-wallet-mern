import React, { useState } from 'react';
import './Input.scss';
import InputMask from 'react-input-mask';

interface IInput{
    register:any,
    errors:any,
    options:any,
    placeholder: string,
    id:string
	inputMask?:string
}

export const Input:React.FC<IInput> = ({register,errors,options,placeholder,id,inputMask = null}) => {


	const  onChange = (event) => {
		
		//   console.log( event.target.value);

	  };
	
	return (
		<div className='input'>

			{inputMask 
				? <InputMask 
					{...register(id, options ) } 
					mask={inputMask}
					placeholder={placeholder} 
					className='input__field'  
				/>
				: <input 
					{...register(id, options ) } 
					placeholder={placeholder} 
					className='input__field'  
				/>	
			}
			{errors[id] && <span>{errors[id].message}</span>}
		</div>
	);
};