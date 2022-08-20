import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setCards } from '../../store/cards';
import { CardsBox } from '../CardsBox';
import { Loader } from '../Loader';
import { TotalBalance } from '../TotalBalance';
import './BalanceBar.scss';

export const BalanceBar:React.FC = () => {
	const [ load, setLoad ] = useState(true);
	const cards = useAppSelector(state => state.cards);
	const dispatch = useAppDispatch();

	useEffect(() => {
		fetch('https://fintech-wallet.herokuapp.com/cards',{method: 'GET'}).then(res => res.json()).then(res => {
			  dispatch(setCards(res));
			  setLoad(false);
		});
	  });

	if(load) return <Loader/>;
	  
	return (
		<div className='balanceBar'>
			<TotalBalance/>
			{cards.length>0 && <CardsBox />}
		</div>
	);
};