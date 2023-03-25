import styles from './HomePage.module.scss';
import { FC } from 'react';
import { UserCard } from '@features/complex-components/components/UserCard/UserCard';
import { PostStripe } from '@features/basic-components/components/PostStripe/PostStripe';

export const HomePage: FC = () => {
	return (
		<div className={styles.page}>
			<UserCard />
			<PostStripe />
		</div>
	);
};
