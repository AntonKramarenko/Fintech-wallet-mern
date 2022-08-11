import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EditCurrency } from '../../components/EditCurrency';
import { Input } from '../../components/ui/Input';
import { useNavigate } from 'react-router-dom';
import {inputsValues} from './inputs';
import './AddCard.scss';
import { useAppDispatch } from '../../store';
// import { addCard } from '../../store/cards';
import { IAddCardInput, IFullCardInfo } from '../../types/interfaces';


export const AddCard:React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { register, handleSubmit, formState: { errors } } = useForm<IAddCardInput>(
		{
			mode: 'onBlur',
			reValidateMode: 'onBlur',
			defaultValues: {
				'cardNumber': '6703444444444449',
				'expDate': '1230',
				'cw': '123'

			},
			shouldFocusError: true
		}
	);

	const onSubmit: SubmitHandler<IAddCardInput> = async data => {
		try {
			await fetch('/cards', {
				method: 'POST', 
				body: JSON.stringify(data),
				headers: {
				  'Content-Type': 'application/json'
				}
			  });
			  navigate('./wallet');
		} catch (error) {
			 throw new Error();
		}
	};

	const handleSucces =()=>{};
	const handleReject =()=> navigate('./wallet');

	return (
		<div className='addCard'>
			<h1 className='addCard__title'>Додавання картки</h1>
			<form onSubmit={handleSubmit(onSubmit)}  className='addCard__form' >
				<>
					{inputsValues.map(
						(item:any) => <Input key={item.id} register={register} errors={errors} {...item} />)
					}
					<EditCurrency register={register} errors={errors} clickSucces={handleSucces} clickReject={handleReject}/>
				</>
			</form>
		</div>
	);
};