import React, { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { users } from '../../data';
import classNames from 'classnames';
import { TitleCounter } from '../../features/basic-components/components/TitleCounter/TitleCounter';
import { UserLabel } from '../../features/basic-components/components/UserLabel/UserLabel';
import { NavSection } from '../../features/basic-components/components/NavSection/NavSection';
import { UserStripe } from '../../features/basic-components/components/UserStripe/UserStripe';
import { RequestCard } from '../../features/basic-components/components/RequestCard/RequestCard';
import { UserCard } from '../../features/basic-components/components/UserCard/UserCard';
import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
    return (
        <>
            <div className={classNames(styles.section, styles.left)}>
                <UserLabel user={users[0]} />
                <NavSection />
                <TitleCounter count={0}>Requests</TitleCounter>
                <RequestCard user={users[0]} />
            </div>
            <div className={classNames(styles.section, styles.middle)}>
                <UserCard user={users[0]} />
            </div>
            <div className={classNames(styles.section, styles.right)}>
                <TitleCounter count={0}>Online</TitleCounter>
                <Panel>
                    <UserStripe user={users[0]} size={'size-s'}>
						20 min ago
                    </UserStripe>
                </Panel>
            </div>
        </>
    );
};
