import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
	return (
		<div className='header'>
            Тестові картки можна знайти 
			<a href='https://docs.adyen.com/development-resources/testing/test-card-numbers#visa' target='_blank' rel='noreferrer'> тут</a>
		</div>
	);
};
