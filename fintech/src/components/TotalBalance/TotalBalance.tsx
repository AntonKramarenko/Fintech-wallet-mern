import React, { useEffect } from 'react';
import { BalanceItem } from '../ui/BalanceItem';
import { calculateTotalBalance } from './calculateBalance';
import { useAppDispatch, useAppSelector } from '../../store';
import { installTotalBalance, setCashBalance } from '../../store/balance';
import { isVisibleModal } from '../../store/modalWindow';
import { MODAL_ACTION } from '../../types/modalAction';
import { ITotalBalance } from '../../types/interfaces';
import './TotalBalance.scss';

export const TotalBalance:React.FC = () => {
	const state = useAppSelector(state => state);
	const dispatch = useAppDispatch();
	const {balance, cards } = state;

	useEffect(() => {
		fetch('https://fintech-wallet.herokuapp.com/cashBalance',{method: 'GET'}).then(res => res.json()).then(res => {
			dispatch(setCashBalance(res[0].cashBalance));
	  });
	}, []);

	useEffect(() => {
		dispatch(installTotalBalance(calculateTotalBalance(cards, balance.cashBalance)));
	}, [ cards, balance.cashBalance ]);
	
	const editCashHandler =()=> dispatch(isVisibleModal({isVisible: true, action: MODAL_ACTION.EDIT_CASH }));
	
	return (
		<div className='totalBalance'>
			<h3 className='totalBalance__title'>Баланс</h3>
			{balance.totalBalance.map((item:ITotalBalance) => 
				<BalanceItem 
					key={item.currency}
					canEdit={false}
					balanceValue={String(item.amount)}
					balanceCurrency={item.currency} 		
				/>)}
			<div className='totalBalance__cash'>
				<h3 className='totalBalance__subTitle'>Готівка</h3>
				{balance.cashBalance.map((item:ITotalBalance) => 
					<BalanceItem 
						key={item.currency}
						canEdit={true}
						balanceValue={String(item.amount)}
						balanceCurrency={item.currency} 
						click={editCashHandler}			
					/>)}
			</div>
		</div>
	);
};