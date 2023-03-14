import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { authorizedUserSelector } from '../../store/slices/userSlice/selectors';
import { loginByCookies } from '../../store/slices/userSlice/thunks';

export const AuthorizationLayout = () => {
	const { status, user } = useAppSelector(authorizedUserSelector);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (status === 'idle') {
			dispatch(loginByCookies());
		} else if (status === 'succeed') {
			navigate('/home');
		}
	}, [status]);

	return (
		<>
			<Outlet />
		</>
	);
};
