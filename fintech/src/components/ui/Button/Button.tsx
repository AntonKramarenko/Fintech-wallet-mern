import React from 'react';
import './Button.scss';

interface IButton{
	title:string,
    type: string,
    active:boolean,
	styleType:string,
    click?:(event) => void
}

export const Button:React.FC<IButton> = ({type, active,click,styleType,title}) => {

	return (
		<> 
			{active && <button type='submit' onClick={click} className={`btn btn-${ styleType }`}>{title}</button>}
		</>
	);
};