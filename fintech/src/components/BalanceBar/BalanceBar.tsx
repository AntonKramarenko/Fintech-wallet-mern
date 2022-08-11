import React from 'react';
import { CardsBox } from '../CardsBox';
import { TotalBalance } from '../TotalBalance';
import './BalanceBar.scss';


export const BalanceBar:React.FC= () => {
	return (
		<div className='balanceBar'>
			<TotalBalance/>
			<CardsBox />
		</div>
	);
};