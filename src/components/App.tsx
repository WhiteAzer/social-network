import React from 'react';
import { FC, ReactElement } from 'react';
import { HomePage } from '../pages/HomePage/HomePage';
import { AuthorizationPage } from '../pages/AuthorizationPage/AuthorizationPage';

const App: FC = (): ReactElement | null => {
	return (
		<div className={'container'}>
			<HomePage />
		</div>
	);
};

export default App;
