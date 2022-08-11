import { Type } from 'typescript';
import { CURRENCIES } from '../../types/currencies';
import { IFullCardInfo, ITotalBalance } from '../../types/interfaces';

export const calculateTotalBalance = (cards:IFullCardInfo[], cash:ITotalBalance[]) =>{
	const balansesArr:ITotalBalance[] = [];

	let totalUah = 0;
	let totalUsd = 0;
	let totalEur = 0;
    
	cards.forEach(card => {
		if(card.currency === CURRENCIES.UAH)totalUah += +card.amount;
		if(card.currency === CURRENCIES.USD)totalUsd += +card.amount;
		if(card.currency === CURRENCIES.EUR) totalEur += +card.amount;
	});

	cash.forEach(item =>{
		if(item.currency === CURRENCIES.UAH) totalUah += +item.amount;
		if(item.currency === CURRENCIES.USD) totalUsd += +item.amount;
		if(item.currency === CURRENCIES.EUR) totalEur += +item.amount;
	});

	if(totalUah> 0) balansesArr.push({currency: 'UAH', amount: totalUah});
	if(totalUsd> 0) balansesArr.push({currency: 'USD', amount: totalUsd});
	if(totalEur> 0) balansesArr.push({currency: 'EUR', amount: totalEur});

	return balansesArr;
};