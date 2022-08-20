import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from '../../components/CreditCard';
import { Header } from '../../components/Header';
import { Button } from '../../components/ui/Button';
import { useAppDispatch, useAppSelector } from '../../store';
import { isVisibleModal } from '../../store/modalWindow';
import { MODAL_ACTION } from '../../types/modalAction';
import './Wallet.scss';

export const Wallet: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const cards = useAppSelector(state => state.cards);

	const addCardHandler = () =>navigate('/add');
	const addCashHandler = () =>dispatch(isVisibleModal({isVisible: true, action: MODAL_ACTION.ADD_CASH}));
	
	return (
		<div className='wallet'>
			<Header/>
			<div className='wallet__btns'>
				<Button type='submit' active={true} click={addCardHandler} styleType='succes' title='Додати карту' />
				<Button type='submit' active={true} click={addCashHandler} styleType='succes' title='Додати готівку'/>
			</div>
			{cards.length > 0 && cards.map(card => 
				<CreditCard 
					key={card.cardNumber} 
					{...card}
				/>)}
		</div>
	);
};
