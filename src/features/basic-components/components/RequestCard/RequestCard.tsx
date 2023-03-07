import styles from './RequestCard.module.scss';
import React, { FC } from 'react';
import { Button } from '@components/Button/Button';
import { Icon16Cancel as IconClose } from '@vkontakte/icons';
import { Panel } from '@components/Panel/Panel';
import { Avatar } from '@components/Avatar/Avatar';
import classNames from 'classnames';
import { PartialUser, PropsWithClass } from '@/types';
import { getFullName } from '@/utils';
import { Link } from 'react-router-dom';

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
