import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { authorizedUserSelector } from '../../store/slices/userSlice/selectors';
import { loginByCookies } from '../../store/slices/userSlice/thunks';

export const AuthorizationLayout: FC = () => {
	const { status } = useAppSelector(authorizedUserSelector);
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	useEffect(() => {
		if (status === 'idle') {
			dispatch(loginByCookies());
		}
	}, [status]);

	if (pathname === '/') {
		return <Navigate to={'/home'} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
};
