import { isValidCardNumber,isExpDate, isCwValidate } from './validateCard';

export const inputsValues = [
	{id: 'cardNumber', 
		placeholder: 'Card Number',
		inputMask: '9999 9999 9999 9999',
		options:{
			required: {
				value: true,
				message : 'Поле обовʼязкове для введеня'
			},
			minLength: {
				value: 16,
				message: 'Мінімум  16  цифр'
			},
			validate: isValidCardNumber
		}
	},
	{id: 'expDate', 
		placeholder: 'Exp. Date',
		inputMask:'99/99',
	 	options:{ 
			required: {
				value: true,
				message : 'Поле обовʼязкове для введеня'
			},
			validate: isExpDate
		}
	},
	{id: 'cw',
		placeholder: 'CW', 
		inputMask: '999',
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