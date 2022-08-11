import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { isValidAmount } from './inputValidate';
import './EditCurrency.scss';

interface IEditCurrency{
    register: any
    errors:any,
	clickSucces: () => void,
	clickReject: () => void,
}

const input = {
	id: 'amount', 
	placeholder: 'Amount',
	options:{ 
		required: {
			value: true,
			message : 'Поле обовʼязкове для введеня'
		},
		min:{
			value: 0,
			message : 'Значення має бути більше 0'
		},
		validate: isValidAmount
	}
};
const selectOptions = [
	{value: 'UAH'},
	{value: 'USD'},
	{value: 'EUR'}
];

export const EditCurrency: React.FC<IEditCurrency> = ({register, errors,clickSucces,clickReject }) => {
	return (
		<div className='editCurrency'>
			<Input register={register}  errors={errors} id={input.id} options={input.options}  placeholder={input.placeholder}  />

			<select {...register('currency')} className='editCurrency__select'>
				{selectOptions.map(opt => <option key={opt.value} value={opt.value} >{opt.value}</option>)}
			</select>
      
			<div className='editCurrency__btns'>
				<Button type='submit' active={true} click={clickSucces} styleType='succes' title='Зберегти'/>
	  			<Button type='reject' active={true} click={clickReject} styleType='reject' title='Скасувати'/>
			</div>
		</div>
	);
};