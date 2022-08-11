const calc = (e:number) => (e*2 < 10) ? e*2 : e*2-9;
const parseDate = (date) => Date.parse(date);

export const isValidCardNumber = (cardNumber:string ) => {
	let isValid = cardNumber.split('') 
	    		    .map( (e,i) => (i % 2 === 0) ? calc(parseInt(e)): parseInt(e)) 
	    		    .reduce( (prv, cur) => prv + cur) % 10 === 0; 
	if(!isValid){
		return 'Введіть правильний номер';
	}
};

export const isExpDate = (val:string) => {
	if(+val > 0){
		const month = parseInt(val.slice(0, 2)) - 1;
		const year = val.slice(2, 4);

		const today = new Date();
		const inputDate = new Date(parseInt(`20${ year }`), month, 1);

		if (parseDate(today) > parseDate(inputDate)) {
			return 'Термін дії карти закінчився';
		}
	}else{
		return 'Введіть коректні числа';
	}

	
};

export const isCwValidate = (value:string) => {
	if(!+value){
		return 'Введіть коректні числа';
	}
};