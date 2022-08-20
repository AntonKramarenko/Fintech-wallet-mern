const calc = (e:number) => (e*2 < 10) ? e*2 : e*2-9;
const parseDate = (date) => Date.parse(date);

export const isValidCardNumber = (cardNumber:string ) => {
	const currentNum = cardNumber.split('').filter(char => char !== '_' && char !== ' ' ).join('');

	let isValid = currentNum.split('') 
	    		    .map( (e,i) => (i % 2 === 0) ? calc(parseInt(e)): parseInt(e)) 
	    		    .reduce( (prv, cur) => prv + cur) % 10 === 0; 

	if(currentNum.length !== 16) return 'Введіть номер карти повністю';
	if(!isValid) return 'Введіть правильний номер';
};

export const isExpDate = (val:string) => {
	if(val.includes('_')) return 'ВВедіть термін дії повністю';

	const month = parseInt(val.split('/')[0]) - 1;
	const year = val.split('/')[1];

	const today = new Date();
	const inputDate = new Date(parseInt(`20${ year }`), month, 1);

	if(month >11) 
		return 'Місяць введено не правильно';

	if(today.getFullYear()+10 < inputDate.getFullYear()) 
		return 'Рік введено не правильно';
	
	if (parseDate(today) > parseDate(inputDate)) 
		return 'Термін дії карти закінчився';
};

export const isCwValidate = (value:string) => {
	if(!+value){
		return 'Введіть коректні числа';
	}
};