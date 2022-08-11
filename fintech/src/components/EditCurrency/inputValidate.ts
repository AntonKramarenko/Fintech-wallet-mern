export const isValidAmount = (value:string) =>{
	if(!+value && +value !== 0){
		return 'Введіть коректні числа';
	}
};