export interface ITotalBalance {
	currency: string,
	amount: number,
}

export interface IAddCardInput  {
    cardNumber: string,
    expDate: string,
    cw: string,
    cardHolder: string,
    amount: string,
    currency: string,
};

export interface IFullCardInfo{
	_id: string;
	cardNumber: string,
	expDate:string,
	cw:string,
	cardHolder:string,
	currency:string,
	amount:string,
	bank?: string,
	scheme?:string,
	type?:string
}