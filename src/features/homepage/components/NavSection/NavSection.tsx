import React, { FC, SVGProps, useState } from 'react';
import { Panel } from '@components/Panel/Panel';
import { NavItem } from '../NavItem/NavItem';
import { Icon28HomeOutline as IconHome } from '@vkontakte/icons';
import { Icon28NewsfeedLinesOutline as IconNews } from '@vkontakte/icons';
import { Icon28Users3Outline as IconPeople } from '@vkontakte/icons';
import { Icon28PictureOutline as IconPhotos } from '@vkontakte/icons';
import { Icon28UserOutline as IconProfile } from '@vkontakte/icons';
import { Icon28SettingsOutline as IconSettings } from '@vkontakte/icons';
import { Icon28MailOutline as IconMessages } from '@vkontakte/icons';
import styles from './NavSection.module.scss';

const icons: Array<{ text: string; component: FC<SVGProps<SVGSVGElement>> }> = [
	{
		component: IconHome,
		text: 'Home',
	},
	{
		component: IconNews,
		text: 'News',
	},
	{
		component: IconMessages,
		text: 'Messages',
	},
	{
		component: IconPeople,
		text: 'People',
	},
	{
		component: IconPhotos,
		text: 'Photos',
	},
	{
		component: IconProfile,
		text: 'Profile',
	},
	{
		component: IconSettings,
		text: 'Settings',
	},
];

export const NavSection: FC = () => {
	const [state, setState] = useState<string>(icons[0].component.displayName);

	return (
		<Panel className={styles.panel}>
			<nav className={styles.nav}>
				<ul>
					{icons.map(({ component, text }) => {
						return (
							<NavItem
								onClick={() => setState(component.displayName)}
								key={component.displayName}
								selected={component.displayName === state}
								Icon={component}
							>
								{text}
							</NavItem>
						);
					})}
				</ul>
			</nav>
		</Panel>
	);
};
