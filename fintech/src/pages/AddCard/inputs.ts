import { isValidCardNumber,isExpDate, isCwValidate } from './validateCard';

export const inputsValues = [
	{id: 'cardNumber', 
		placeholder: 'Card Number',
		options:{
			required: {
				value: true,
				message : 'Поле обовʼязкове для введеня'
			},
			minLength: {
				value: 16,
				message: 'Мінімум  16  цифр'
			},
			maxLength:{
				value: 16,
				message: 'Максимум  16  цифр'
			},
			//\\b([0-9]{4})[0-9]{0,9}([0-9]{4})\\b
			validate: isValidCardNumber
		}
	},
	{id: 'expDate', 
		placeholder: 'Exp. Date',
	 	options:{ 
			required: {
				value: true,
				message : 'Поле обовʼязкове для введеня'
			},
			pattern:{
				value:  /[1-9]/,
				message : 'Введіть коректні данні'
			},
			minLength: {
				value: 4,
				message: 'Мінімум  4 цифри'
			},
			maxLength:{
				value: 4,
				message: 'Максимум  4  цифри'
			},
			validate: isExpDate
		}
	},
	{id: 'cw',
		placeholder: 'CW', 
		options:{
			required: {
				value: true,
				message : 'Поле обовʼязкове для введеня'
			},
			maxLength: {
				value: 3,
				message: 'CVV має містити 3цифри'
			},
			minLength: {
				value: 3,
				message: 'CVV має містити 3 цифри'
			},
			validate: isCwValidate
		} 
	},
	{id: 'cardHolder', placeholder: 'Card Holder'}
];