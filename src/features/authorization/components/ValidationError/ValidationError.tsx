import styles from './ValidationError.module.scss';
import { FC } from 'react';

export const ValidationError: FC = () => {
	return <div className={styles.error}>Ошибка валидации</div>;
};
