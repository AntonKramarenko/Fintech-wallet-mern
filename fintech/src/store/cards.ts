import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  IFullCardInfo } from '../types/interfaces';

const initialState:IFullCardInfo[] = [];

export const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		setCards(state:IFullCardInfo[], action:PayloadAction<IFullCardInfo[]>){
			 return state = action.payload;
		}
	}
});

export const {  setCards} = cardsSlice.actions;
export default cardsSlice.reducer;
