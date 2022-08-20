import React from 'react';
import { useAppSelector } from '../../store';
import { CardsBox } from '../CardsBox';
import { TotalBalance } from '../TotalBalance';
import './BalanceBar.scss';

export const BalanceBar:React.FC = () => {
	const cards = useAppSelector(state => state.cards);

	
	
	return (
		<div className='balanceBar'>
			<TotalBalance/>
			{cards.length>0 && <CardsBox />}
		
		</div>
	);
};