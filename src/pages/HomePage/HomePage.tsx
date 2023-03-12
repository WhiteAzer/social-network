import styles from './HomePage.module.scss';
import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector, currentUserSelector } from '@store/slices/userSlice/selectors';
import { fetchInfo, fetchUser } from '@store/slices/userSlice/thunks';

export const HomePage: FC = () => {
	const dispatch = useAppDispatch();
	const params = useParams();
	const { user: current, info } = useAppSelector(currentUserSelector);
	const { user: authorized } = useAppSelector(authorizedUserSelector);

	useEffect(() => {
		if (authorized) {
			dispatch(fetchUser(params.userID || authorized.id));
			dispatch(fetchInfo(params.userID || authorized.id));
		}
	}, [params, authorized]);

	return <></>;
};
