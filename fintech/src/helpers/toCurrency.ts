import { CURRENCIES } from '../types/currencies';

const amountConverter = (price:string, currency:string,location:string) =>{
	return new Intl.NumberFormat(location, {
		style: 'currency',
		currency: currency
	}).format(parseInt(price));

};

export const toCurrency = (price:string,currency:string ) => {
	switch (currency) {
	case CURRENCIES.UAH: return  amountConverter(price, currency, 'ua-UA');
	case CURRENCIES.USD: return  amountConverter(price, currency, 'en-US');
	case CURRENCIES.EUR: return  amountConverter(price, currency, 'eu');
	}
};