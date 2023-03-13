import styles from './UserInfo.module.scss';
import classNames from 'classnames';
import { FC, useContext } from 'react';
import { PropsWithClass } from '@/types/runtime-types';
import { IUser, IUserInfo } from '@/types/data-types';
import { getFullName, getShortLocation } from '@/utils';
import { SkeletonText } from '@features/skeletonui';
import { Badge } from '@/components';
import {
	Icon16EducationOutline as IconEducation,
	Icon16PlaceOutline as IconLocation,
} from '@vkontakte/icons';
import { ColorContext } from '@context/ColorContext/ColorProvider';

type Props = PropsWithClass & {
	user: IUser;
	info: IUserInfo;
};

export const UserInfo: FC<Props> = ({ className, user, info }) => {
	const { svg } = useContext(ColorContext);

	return (
		<div className={classNames(styles.info, className)}>
			<h1 className={styles.name}>{getFullName(user)}</h1>
			<div className={styles.badges}>
				<Badge>
					<IconEducation fill={svg.color} />
					<span>{info.education}</span>
				</Badge>
				<Badge>
					<IconLocation fill={svg.color} />
					<span>{getShortLocation(info.location)}</span>
				</Badge>
			</div>
		</div>
	);
};

export const SkeletonUserInfo: FC = () => {
	return (
		<div className={styles.info}>
			<SkeletonText sx={{ width: '50%' }} className={styles.name} lines={1} />
		</div>
	);
};
