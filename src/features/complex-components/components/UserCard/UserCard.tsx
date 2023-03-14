import styles from './UserCard.module.scss';
import classNames from 'classnames';
import { PropsWithClass } from '@/types/runtime-types';
import { FC, useEffect } from 'react';
import { Avatar, Panel } from '@/components';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector, currentUserSelector } from '@store/slices/userSlice/selectors';
import { SkeletonAvatar } from '@features/skeletonui';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { fetchInfo, fetchUser } from '@store/slices/userSlice/thunks';
import {
	SkeletonUserInfo,
	UserInfo,
} from '@features/basic-components/components/UserInfo/UserInfo';

type Props = PropsWithClass;

export const UserCard: FC<Props> = ({ className }) => {
	const current = useAppSelector(currentUserSelector);
	const authorized = useAppSelector(authorizedUserSelector);
	const params = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (authorized.status === 'succeed') {
			dispatch(fetchUser(params.userID || authorized.user.id));
			dispatch(fetchInfo(params.userID || authorized.user.id));
		}
	}, [params, authorized]);

	return (
		<Panel className={classNames(styles.card, className)}>
			{current.user.status === 'succeed' ? (
				<Avatar size={'size-l'} src={current.user.data.avatar.path} />
			) : (
				<SkeletonAvatar size={'size-l'} />
			)}
			{current.info.status === 'succeed' && current.user.status === 'succeed' ? (
				<UserInfo user={current.user.data} info={current.info.data} />
			) : (
				<SkeletonUserInfo />
			)}
		</Panel>
	);
};
