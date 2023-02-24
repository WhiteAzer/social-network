import React from 'react';
import { FC, ReactElement } from 'react';
import { HomePage } from '../pages/HomePage/HomePage';
import { Components } from '@components/Components';

const App: FC = (): ReactElement | null => {
	return (
		<div className={'container'}>
			<Components />
		</div>
	);
};

export default App;
