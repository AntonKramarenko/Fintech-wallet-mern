import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { maskedNumber } from '../../helpers/maskedNumber';
import { toCurrency } from '../../helpers/toCurrency';
import { useAppDispatch } from '../../store';
import { setCards } from '../../store/cards';
import MasterCardLogo from '../../assets/schemaLogo/mastercard-logo.png';
import VisaLogo from '../../assets/schemaLogo/visa-logo.png';
import './CreditCard.scss';

interface ICreditCard{
	bank?: string | undefined,
	scheme?:string | undefined,
	type?:string | undefined,
	amount: string,
	currency: string,
	cardNumber:string,
	expDate: string
}

export const CreditCard: React.FC<ICreditCard> = ({bank,scheme = 'scheme',type,amount,cardNumber,expDate,currency}) => {
	const [ isCopy, setIsCopy ] = useState(false);
	const dispatch = useAppDispatch();

	const clickCopyHandler = () =>{
		navigator.clipboard.writeText(cardNumber);
		setIsCopy(true);
	};

	const schemaFormater = (schema:string)=>{
		const imgJSX = (logo:any) => <img className='creditCard__schemaLogo' src={logo} alt={schema} />;

		switch (schema.toLowerCase()) {
		case 'mastercard': return imgJSX(MasterCardLogo);
		case 'visa': return imgJSX(VisaLogo);
		default: return schema;
		}
	};

	const deleteCardHandler = async (event) =>{
		event.preventDefault();
		 fetch('http://localhost:3001/cards', {
			method: 'DELETE', 
			body: JSON.stringify({cardNumber: cardNumber}),
			headers: {'Content-Type': 'application/json'}
		  }).then(res => res.json()).then(res => dispatch(setCards(res)));
	};

	return (
		<div className='creditCard'>
			<div className='creditCard__card'>
				{bank && <span className='creditCard__bank'>{bank}</span>}
			 <div className='creditCard__info'>
					<div className='creditCard__paymentSystem'>
						{schemaFormater(scheme) }
					</div>
					<div className='creditCard__cardType'>{type}</div>
				</div>
				<span className='creditCard__amount'>{toCurrency(amount, currency)}</span>
				<span className='creditCard__cardNumber' >
					{isCopy ? cardNumber : maskedNumber(cardNumber) }
					<span className='creditCard__copyNumber' onClick={clickCopyHandler}>
						{isCopy? 'copied' :'copy'  }
					</span>
				</span>
				<span className='creditCard__expDate'>{expDate}</span>
			</div>
			<Button title={'Видалити'} type={'reject'} active={true} styleType={'reject'} click={deleteCardHandler}/>
		</div>
	);
};