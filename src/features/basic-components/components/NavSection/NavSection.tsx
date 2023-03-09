import styles from './NavSection.module.scss';
import { FC, SVGProps } from 'react';
import {
	Icon28HomeOutline as IconHome,
	Icon28NewsfeedLinesOutline as IconNews,
	Icon28PictureOutline as IconPhotos,
	Icon28SettingsOutline as IconSettings,
} from '@vkontakte/icons';
import { useLocation } from 'react-router-dom';
import { splitRoute } from '@/utils';
import { Panel } from '@/components';
import { NavItem } from '@features/basic-components';
import { routes } from '@data/constants';

const icons: Array<{ icon: FC<SVGProps<SVGSVGElement>>; route: string }> = [
	{
		icon: IconHome,
		route: routes.home,
	},
	{
		icon: IconNews,
		route: routes.news,
	},
	{
		icon: IconPhotos,
		route: routes.photos,
	},
	{
		icon: IconSettings,
		route: routes.settings,
	},
];

export const NavSection: FC = () => {
	const { pathname } = useLocation();
	const path = splitRoute(pathname)[0];

	return (
		<Panel className={styles.panel}>
			<nav>
				<ul>
					{icons.map(({ icon, route }, i) => {
						return (
							<NavItem key={i} Icon={icon} selected={route === path}>
								{route}
							</NavItem>
						);
					})}
				</ul>
			</nav>
		</Panel>
	);
};
