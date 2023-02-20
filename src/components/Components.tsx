import React, { FC } from 'react';
import { Avatar } from '@components/Avatar/Avatar';
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';
import { InputSearch } from '@components/InputSearch/InputSearch';
import { UserLabel } from '../features/homepage/components/UserLabel/UserLabel';
import { Panel } from '@components/Panel/Panel';
import { TitleCounter } from '../features/homepage/components/TitleCounter/TitleCounter';
import { NavSection } from '../features/homepage/components/NavSection/NavSection';
import { UserStripe } from '../features/homepage/components/UserStripe/UserStripe';
import { user } from '../data';

export const Components: FC = () => {
	return (
		<div className={'components'}>
			<Panel>
				<UserStripe user={user} size={'size-s'} />
			</Panel>
			<div style={{ width: '275px' }}>
				<NavSection />
			</div>
			<div style={{ width: '275px' }}>
				<UserLabel user={user} />
			</div>
			<TitleCounter count={0}>FRIENDS</TitleCounter>
			<TitleCounter count={5}>CONTACTS</TitleCounter>
			<UserLabel user={user} />
			<Avatar size={'size-s'} />
			<Avatar size={'size-m'} />
			<Avatar size={'size-l'} />
			<Button size={'size-s'} theme={'primary'}>
				Accept
			</Button>
			<Button size={'size-m'} theme={'primary'}>
				Accept
			</Button>
			<Button size={'size-l'} theme={'primary'}>
				Accept
			</Button>
			<Button size={'size-s'} theme={'secondary'}>
				Accept
			</Button>
			<Button size={'size-m'} theme={'secondary'}>
				Accept
			</Button>
			<Button size={'size-l'} theme={'secondary'}>
				Accept
			</Button>
			<Input size={'size-m'} placeholder={'Search'} />
			<Input size={'size-l'} placeholder={'Search'} />
			<InputSearch placeholder={'Search'} />
		</div>
	);
};
