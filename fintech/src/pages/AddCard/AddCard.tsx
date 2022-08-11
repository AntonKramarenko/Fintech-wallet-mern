import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EditCurrency } from '../../components/EditCurrency';
import { Input } from '../../components/ui/Input';
import {inputsValues} from './inputs';
import { IAddCardInput} from '../../types/interfaces';
import './AddCard.scss';

export const AddCard:React.FC = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm<IAddCardInput>(
		{
			mode: 'onBlur',
			reValidateMode: 'onBlur',
			shouldFocusError: true
		}
	);

	const onSubmit: SubmitHandler<IAddCardInput> = async data => {
		try {
			await fetch('/cards', {
				method: 'POST', 
				body: JSON.stringify(data),
				headers: {'Content-Type': 'application/json'}
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
						item => <Input key={item.id} register={register} errors={errors} options={item.options} {...item} />)
					}
					<EditCurrency register={register} errors={errors} clickSucces={handleSucces} clickReject={handleReject}/>
				</>
			</form>
		</div>
	);
};