import styles from './NavSection.module.scss';
import { FC, SVGProps } from 'react';
import {
	Icon28HomeOutline as IconHome,
	Icon28NewsfeedLinesOutline as IconNews,
	Icon28PictureOutline as IconPhotos,
	Icon28SettingsOutline as IconSettings,
} from '@vkontakte/icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { routes } from '@data/constants';
import { splitRoute } from '@/utils';
import { Panel } from '@/components';
import { NavItem } from '@features/basic-components';

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
	const { userID } = useParams();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const path = splitRoute(pathname)[0];

	return (
		<Panel className={styles.panel}>
			<nav>
				<ul>
					{icons.map(({ icon, route }, i) => {
						const current = splitRoute(route);

						return (
							<NavItem
								key={i}
								Icon={icon}
								selected={current[0] === path}
								onClick={() =>
									navigate('/' + current[0] + (current[1] ? '/' + userID : ''))
								}
							>
								{current[0]}
							</NavItem>
						);
					})}
				</ul>
			</nav>
		</Panel>
	);
};
