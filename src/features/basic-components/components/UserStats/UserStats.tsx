import React, { type FC } from 'react';
import { type PropsWithClass, type User } from '../../../../types';
import { getShortNumber } from '../../../../utils';
import styles from './UserStats.module.scss';

type Props = PropsWithClass & {
  user: User
}

export const UserStats: FC<Props> = ({ user }) => {
    return (
        <div className={styles.stats}>
            <div>
                {getShortNumber(user.friends.length)}
                <br />
                <span>Friends</span>
            </div>
            <div>
                {getShortNumber(user.followers.length)}
                <br />
                <span>Followers</span>
            </div>
            <div>
                {getShortNumber(user.entries.photos.length)}
                <br />
                <span>Photos</span>
            </div>
        </div>
    );
};
