import { Navigate, Route, Routes } from 'react-router-dom';
import { BalanceBar } from './components/BalanceBar';
import { ModalWindow } from './components/ModalWindow';
import { AddCard } from './pages/AddCard';
import { Wallet } from './pages/Wallet';
import { useAppSelector } from './store';
import './styless/index.scss';

function App() {
	const isVisibleModal = useAppSelector(state => state.modal.isVisible);

	return (
		<div className='app'>
			<BalanceBar/>
			{isVisibleModal && <ModalWindow/>}
			<div className='container'>
				<Routes>
					<Route path='/wallet' element={<Wallet/>} />
					<Route path='/add' element={<AddCard/>} />
					<Route path='*' element={ <Navigate to='/wallet'/>}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
