import styles from './RequestCard.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Icon16Cancel as IconClose } from '@vkontakte/icons';
import { PartialUser, PropsWithClass } from '@/types';
import { getFullName } from '@/utils';
import { Link } from 'react-router-dom';
import { Avatar, Button, Panel } from '@/components';

type Props = PropsWithClass & {
	user: PartialUser;
};

export const RequestCard: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={classNames(styles.card, className)}>
			<div className={styles.image}>
				<Link to={user.id}>
					<Avatar size={'size-l'} />
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
