import React, { FC } from 'react';
import { PropsWithClass, User } from '../../../../types';
import styles from './RequestCard.module.scss';
import { Button } from '@components/Button/Button';
import { Icon16Cancel as IconClose } from '@vkontakte/icons';
import { Panel } from '@components/Panel/Panel';
import { Avatar } from '@components/Avatar/Avatar';
import classNames from 'classnames';

type Props = PropsWithClass & {
	user: User;
};

export const RequestCard: FC<Props> = ({ user, className }) => {
    return (
        <Panel className={classNames(styles.card, className)}>
            <div className={styles.image}>
                <Avatar size={'size-l'} />
                <span className={styles.name}>{user.firstname + ' ' + user.lastname}</span>
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
