import styles from './HomePage.module.scss';
import { FC } from 'react';
import { UserCard } from '@features/complex-components/components/UserCard/UserCard';

export const HomePage: FC = () => {
	return (
		<>
			<UserCard />
		</>
	);
};
