import { FC } from 'react';
import { PropsWithClass, User } from '@/types';

type Props = PropsWithClass & {
	user: User;
};

export const UserBadges: FC<Props> = ({ user, className }) => {
	return <></>;
};
