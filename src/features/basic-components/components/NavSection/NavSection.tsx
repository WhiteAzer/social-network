import styles from './NavSection.module.scss';
import { FC, useCallback } from 'react';
import {
	Icon28HomeOutline as IconHome,
	Icon28NewsfeedLinesOutline as IconNews,
	Icon28PictureOutline as IconPhotos,
	Icon28SettingsOutline as IconSettings,
} from '@vkontakte/icons';
import { Panel } from '@/components';
import { NavItem } from '@features/basic-components';
import { joinRoutes, splitRoute } from '@/utils';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavSection: FC = () => {
	const path = splitRoute(useLocation().pathname)[0];
	const navigate = useNavigate();

	const redirect = useCallback((path: string) => {
		return () => navigate(joinRoutes(path));
	}, []);

	return (
		<Panel className={styles.panel}>
			<nav>
				<ul>
					<NavItem Icon={IconHome} selected={path === 'home'} onClick={redirect('home')}>
						Home
					</NavItem>
					<NavItem Icon={IconNews} selected={path === 'news'} onClick={redirect('news')}>
						News
					</NavItem>
					<NavItem
						Icon={IconPhotos}
						selected={path === 'photos'}
						onClick={redirect('photos')}
					>
						Photos
					</NavItem>
					<NavItem
						Icon={IconSettings}
						selected={path === 'settings'}
						onClick={redirect('settings')}
					>
						Settings
					</NavItem>
				</ul>
			</nav>
		</Panel>
	);
};
