import React from 'react';
import { BalanceItem } from '../ui/BalanceItem';
import { IFullCardInfo } from '../../types/interfaces';
import {  useAppSelector } from '../../store';
import './CardsBox.scss';

export const CardsBox:React.FC = () => {
	const cards = useAppSelector(state => state.cards);

	return (
		<div className='cardsBox'>
			<div className='cardsBox__title'>Мої картки</div>
			{cards.length > 0 && cards.map(
				(card:IFullCardInfo) => 
					<BalanceItem 
						key={card._id} 
						bank={card.bank} 
						canEdit={false} 
						balanceValue={card.amount} 
						balanceCurrency={card.currency} 
					/>)}
		</div>
	);
};