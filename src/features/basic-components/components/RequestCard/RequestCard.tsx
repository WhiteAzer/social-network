import styles from './RequestCard.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Icon16Cancel as IconClose } from '@vkontakte/icons';
import { getFullName } from '@/utils';
import { Link } from 'react-router-dom';
import { Avatar, Button, Panel } from '@/components';
import { PropsWithClass } from '@/types/runtime-types';
import { IUser } from '@/types/data-types';

type Props = PropsWithClass & {
	user: IUser;
};

export const RequestCard: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={classNames(styles.card, className)}>
			<div className={styles.image}>
				<Link to={user.id}>
					<Avatar size={'size-l'} src={user.avatar.path} />
				</Link>
				<span className={styles.name}>{getFullName(user)}</span>
			</div>
			<div className={styles.buttons}>
				<Button size={'size-l'}>Accept</Button>
				<button className={styles.button}>
					<IconClose fill={'#212F3C'} />
				</button>
			</div>
		</Panel>
	);
};
