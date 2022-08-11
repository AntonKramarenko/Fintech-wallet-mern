import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { installTotalBalance, setCashBalance } from '../../store/balance';
import { isVisibleModal } from '../../store/modalWindow';
import { ITotalBalance } from '../../types/interfaces';
import { calculateTotalBalance } from './calculateBalance';
import { BalanceItem } from '../ui/BalanceItem';
import './TotalBalance.scss';
import { MODAL_ACTION } from '../../types/modalAction';

interface ITotalBalanceProp{
}

export const TotalBalance:React.FC<ITotalBalanceProp> = () => {
	const state = useAppSelector(state => state);
	const dispatch = useAppDispatch();

	const {balance, cards } = state;

	useEffect(() => {
		fetch('/cashBalance',{method: 'GET'}).then(res => res.json()).then(res => {
			console.log(res[0].cashBalance);
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
