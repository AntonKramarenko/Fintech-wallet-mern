export const maskedNumber = (num: string )=>{
	let fitstNum = num.slice(0,4);
	let centerNum = num.slice(4,num.length -4).split('').map(i => i.replace(i, '*')).join('');
	let lastNum = num.slice(-4);
	return fitstNum + ' '+ centerNum  + ' '+lastNum;
};