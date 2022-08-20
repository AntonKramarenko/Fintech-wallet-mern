import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EditCurrency } from '../../components/EditCurrency';
import { Input } from '../../components/ui/Input';
import { inputsValues } from './inputs';
import { IAddCardInput } from '../../types/interfaces';
import './AddCard.scss';

export const AddCard: React.FC = () => {
	const navigate = useNavigate();
	const {register, handleSubmit, setError, formState: { errors }} = useForm<IAddCardInput>({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		shouldFocusError: true
	});

	const onSubmit: SubmitHandler<IAddCardInput> = async data => {

		await fetch('http://localhost:3001/cards', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'}
			  })
			.then(res => res.ok ? navigate('./wallet')  : Promise.reject(res))
			.catch((error) =>{
				if(error.statusText === 'cardExist') {
					setError('cardNumber' , {type: 'custom', message:'Така карта вже існує в гаманці'});
				}else{
					setError('cardNumber' , {type: 'custom', message:'Перевірте правильність введених данних'});
					setError('cw', {type: 'custom', message:'Перевірте правильність введених данних'});
					setError('expDate' , {type: 'custom', message:'Перевірте правильність введених данних'});
				}
			});
	};

	const handleSucces = () => {};
	const handleReject = () => navigate('./wallet');

	return (
		<div className='addCard'>
			<h1 className='addCard__title'>Додавання картки</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='addCard__form'>
				{inputsValues.map((input) => (
					<Input
						key={input.id}
						register={register}
						errors={errors}
						options={input.options}
						{...input}
					/>
				))}
				<EditCurrency register={register} errors={errors} clickSucces={handleSucces} clickReject={handleReject} />
			</form>
		</div>
	);
};
