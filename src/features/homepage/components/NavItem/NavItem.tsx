import React, { FC, MouseEventHandler, SVGProps } from 'react';
import styles from './NavItem.module.scss';
import classNames from 'classnames';

type Props = {
	Icon: FC<SVGProps<SVGSVGElement>>;
	onClick?: MouseEventHandler<HTMLLIElement>;
	children: string;
	selected?: boolean;
};

export const NavItem: FC<Props> = ({ selected, children, Icon, onClick }) => {
	return (
		<li onClick={onClick} className={classNames(styles.item, selected && styles.selected)}>
			<div className={styles.info}>
				<Icon fill={selected ? '#1178f2' : '#a7b6c7'} />
				<span className={styles.text}>{children}</span>
			</div>
			<div className={styles.badge}></div>
		</li>
	);
};
