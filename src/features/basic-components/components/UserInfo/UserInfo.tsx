import styles from './UserInfo.module.scss';
import classNames from 'classnames';
import { FC, useContext } from 'react';
import { PropsWithClass } from '@/types/runtime-types';
import { IUser, IUserInfo } from '@/types/data-types';
import { getFullName, getShortLocation } from '@/utils';
import { SkeletonButton, SkeletonText } from '@features/skeletonui';
import { Badge, Button } from '@/components';
import {
	Icon16EducationOutline as IconEducation,
	Icon16PlaceOutline as IconLocation,
} from '@vkontakte/icons';

type Props = PropsWithClass & {
	user: IUser;
	info: IUserInfo;
	isHome: boolean;
};

export const UserInfo: FC<Props> = ({ className, user, info, isHome }) => {
	return (
		<div className={styles.wrapper}>
			<div className={classNames(styles.info, className)}>
				<h1 className={styles.name}>{getFullName(user)}</h1>
			</div>
			<div className={styles.stats}></div>
			<div className={styles.button_group}></div>
		</div>
	);
};

export const SkeletonUserInfo: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				<SkeletonText className={styles.name} />
			</div>
			<div className={styles.stats}></div>
			<div className={styles.button_group}></div>
		</div>
	);
};
