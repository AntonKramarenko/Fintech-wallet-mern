const calc = (e:number) => (e*2 < 10) ? e*2 : e*2-9;

export const isValidCardNumber = (cardNumber:string ) => {
	let isValid = cardNumber.split('') 
	    		    .map( (e,i) => (i % 2 === 0) ? calc(parseInt(e)): parseInt(e)) 
	    		    .reduce( (prv, cur) => prv + cur) % 10 === 0; 
	if(!isValid){
		return 'Введіть правильний номер';
	}
};

export const isExpDate = (value:string) => {
	if(!+value){
		return 'Введіть коректні числа';
	}
};

export const isCwValidate = (value:string) => {
	if(!+value){
		return 'Введіть коректні числа';
	}
};