import React, { FC } from 'react';
import { Avatar } from '@components/Avatar/Avatar';

export const Components: FC = () => {
	return (
		<div className={'components'}>
			<Avatar size={'size-s'} />
			<Avatar size={'size-m'} />
			<Avatar size={'size-l'} />
		</div>
	);
};
