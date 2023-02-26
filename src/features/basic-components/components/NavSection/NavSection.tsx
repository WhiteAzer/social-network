import React, { type FC, type SVGProps, useState } from 'react';
import { Panel } from '@components/Panel/Panel';
import { NavItem } from '../NavItem/NavItem';
import { Icon28HomeOutline as IconHome, Icon28NewsfeedLinesOutline as IconNews, Icon28Users3Outline as IconPeople, Icon28PictureOutline as IconPhotos, Icon28UserOutline as IconProfile, Icon28SettingsOutline as IconSettings, Icon28MailOutline as IconMessages } from '@vkontakte/icons';
import styles from './NavSection.module.scss';

const icons: Array<{ text: string, component: FC<SVGProps<SVGSVGElement>> }> = [
	{
		component: IconHome,
		text: 'Home'
	},
	{
		component: IconNews,
		text: 'News'
	},
	{
		component: IconPhotos,
		text: 'Photos'
	},
	{
		component: IconSettings,
		text: 'Settings'
	}
];

export const NavSection: FC = () => {
	const [state, setState] = useState<string>(icons[0].component.displayName);

	return (
		<Panel className={styles.panel}>
			<nav>
				<ul>
					{icons.map(({ component, text }) => {
						return (
							<NavItem
								onClick={() => { setState(component.displayName); }}
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
