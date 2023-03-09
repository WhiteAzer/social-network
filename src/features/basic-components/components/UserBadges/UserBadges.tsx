import { FC } from 'react';
import { PropsWithClass } from '@/types/runtime-types';
import { IUser } from '@/types/data-types';

type Props = PropsWithClass & {
	user: IUser;
};

export const UserBadges: FC<Props> = () => {
	return <></>;
};
