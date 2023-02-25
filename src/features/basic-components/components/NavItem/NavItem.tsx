import React, { FC, MouseEventHandler, PropsWithChildren, SVGProps } from 'react';
import styles from './NavItem.module.scss';
import classNames from 'classnames';

type Props = PropsWithChildren & {
	Icon: FC<SVGProps<SVGSVGElement>>;
	onClick?: MouseEventHandler<HTMLLIElement>;
	selected?: boolean;
};

export const NavItem: FC<Props> = ({ selected, children, Icon, onClick }) => {
	return (
		<li onClick={onClick} className={classNames(styles.item, selected && styles.selected)}>
			<div className={styles.info}>
				<Icon fill={selected ? '#1178f2' : '#a7b6c7'} />
				<span>{children}</span>
			</div>
			<div className={styles.badge}></div>
		</li>
	);
};
