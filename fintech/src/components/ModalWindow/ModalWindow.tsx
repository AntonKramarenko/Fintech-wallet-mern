import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EditCurrency } from '../EditCurrency';
import { useAppDispatch, useAppSelector } from '../../store';
import { isVisibleModal } from '../../store/modalWindow';
import { addCash, changeCash } from '../../store/balance';
import { MODAL_ACTION } from '../../types/modalAction';
import './ModalWindow.scss';

type Inputs = {
    amount: string,
    currency: string,
  };

export const ModalWindow: React.FC = () => {
	const modalAction = useAppSelector(state => state.modal.action);
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<Inputs> =async data => {
		switch (modalAction) {
		case MODAL_ACTION.ADD_CASH:
			dispatch(addCash(data));
			break;
		case MODAL_ACTION.EDIT_CASH: dispatch(changeCash(data));
			break;
		}
		dispatch(isVisibleModal({isVisible: false, action: MODAL_ACTION.DEFAULT }));
	};

	const handleSucces = ()=> {};
	const handleReject = ()=> dispatch(isVisibleModal({isVisible: false, action: MODAL_ACTION.DEFAULT }));

	return (
		<div  className='modalWindow'>
			<form onSubmit={handleSubmit(onSubmit)} className='modalWindow__body'>
				<EditCurrency register={register} errors={errors} clickSucces={handleSucces} clickReject={handleReject}/>
			</form>
		</div>
	);
};