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
import { ColorContext } from '@context/ColorContext/ColorProvider';
import { SkeletonBadge } from '@components/Badge/Badge';

type Props = PropsWithClass & {
	user: IUser;
	info: IUserInfo;
	isHome: boolean;
};

export const UserInfo: FC<Props> = ({ className, user, info, isHome }) => {
	const { svg } = useContext(ColorContext);

	return (
		<div className={styles.wrapper}>
			<div className={classNames(styles.info, className)}>
				<h1 className={styles.name}>{getFullName(user)}</h1>
				<div className={styles.badges}>
					<Badge>
						<IconLocation fill={svg.color} />
						<span>{getShortLocation(info.location)}</span>
					</Badge>
				</div>
			</div>
			<div className={styles.stats}></div>
			<div className={styles.button_group}>
				{isHome ? (
					<Button size={'size-l'}>Edit</Button>
				) : (
					<Button size={'size-l'}>Message</Button>
				)}
			</div>
		</div>
	);
};

export const SkeletonUserInfo: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				<SkeletonText
					sx={{ width: '65%', fontSize: 23 }}
					className={styles.name}
					lines={1}
				/>
				<SkeletonText sx={{ width: '35%', fontSize: 23 }} lines={1} />
			</div>
			<div className={styles.stats}></div>
			<div className={styles.button_group}>
				<SkeletonButton size={'size-l'} />
			</div>
		</div>
	);
};
