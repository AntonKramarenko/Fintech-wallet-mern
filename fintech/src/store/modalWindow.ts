import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MODAL_ACTION } from '../types/modalAction';
interface ImodalWindowState {
	isVisible:boolean,
	action:string
}

const initialState:ImodalWindowState={
	isVisible: false,
	action: MODAL_ACTION.DEFAULT
};

export const modalWindowSlice = createSlice({
	name: ' modalWindow',
	initialState,
	reducers: {
		isVisibleModal(state:any, action:PayloadAction<ImodalWindowState>){
			return  action.payload;
		}
	}
});

export const { isVisibleModal} = modalWindowSlice.actions;
export default modalWindowSlice.reducer;


// addQuestion(state:IQuestionState[],action:PayloadAction<IQuestionState>){
// 	state.push(action.payload)
// },