import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import balance from './balance';
import cards from './cards';
import modalWindow from './modalWindow';

export const store = configureStore({
	reducer: {
		balance: balance,
		cards: cards,
		modal: modalWindow
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

