import React, { FC } from 'react';
import { Avatar } from '@components/Avatar/Avatar';
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';
import { InputSearch } from '@components/InputSearch/InputSearch';
import { Panel } from '@components/Panel/Panel';
import { NavSection } from '../features/basic-components/components/NavSection/NavSection';
import { TitleCounter } from '../features/basic-components/components/TitleCounter/TitleCounter';
import { users } from '../data';
import { UserStripe } from '../features/basic-components/components/UserStripe/UserStripe';
import { RequestCard } from '../features/basic-components/components/RequestCard/RequestCard';

export const Components: FC = () => {
    return (
        <div className={'components'}>
            <Avatar size={'size-s'} />
            <Avatar size={'size-m'} />
            <Avatar size={'size-l'} />
            <Button size={'size-s'}>Accept</Button>
            <Button size={'size-m'}>Accept</Button>
            <Button size={'size-l'}>Accept</Button>
            <Button size={'size-s'} color={'secondary'}>
				Accept
            </Button>
            <Button size={'size-m'} color={'secondary'}>
				Accept
            </Button>
            <Button size={'size-l'} color={'secondary'}>
				Accept
            </Button>
            <Panel>
                <Button size={'size-l'}>Accept</Button>
            </Panel>
            <Panel>
                <Input size={'size-m'} placeholder={'Email'} />
            </Panel>
            <div style={{ width: '275px' }}>
                <NavSection />
            </div>
            <Panel>
                <TitleCounter count={1}>REQUESTS</TitleCounter>
            </Panel>
            <Panel>
                <TitleCounter count={0}>NOTIFICATIONS</TitleCounter>
            </Panel>
            <div style={{ width: '275px' }}>
                <RequestCard user={users[0]} />
            </div>
            <Panel>
                <UserStripe size={'size-xs'} user={users[0]}>
					20 min ago
                </UserStripe>
            </Panel>
            <InputSearch placeholder={'Search'} />
        </div>
    );
};
