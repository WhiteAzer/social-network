import styles from './PostStripe.module.scss';
import classNames from 'classnames';
import { Icon16ChainOutline as IconChain } from '@vkontakte/icons';
import { PropsWithClass } from '@/types/runtime-types';
import { FC } from 'react';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector } from '@store/slices/userSlice/selectors';
import { SkeletonAvatar, SkeletonButton, SkeletonText } from '@features/skeletonui';
import { Avatar, Button, Input, Panel } from '@/components';
import { capitalize } from '@/utils';

type Props = PropsWithClass;

export const PostStripe: FC<Props> = () => {
	const { user, status } = useAppSelector(authorizedUserSelector);

	return (
		<Panel className={styles.stripe}>
			{status === 'succeed' ? (
				<>
					<Avatar size={'size-s'} src={user.avatar.path} />
					<Input
						size={'size-l'}
						className={styles.input}
						placeholder={`What's new, ${capitalize(user.firstname)}?`}
					/>
					<Button size={'size-m'} className={styles.button}>
						<IconChain fill={'#FFFFFF'} />
						Post it!
					</Button>
				</>
			) : (
				<>
					<SkeletonAvatar size={'size-s'} />
					<SkeletonText
						lines={1}
						sx={{ width: '25%' }}
						className={classNames(styles.input, styles.input_skeleton)}
					/>
					<SkeletonButton size={'size-m'} className={styles.button} />
				</>
			)}
		</Panel>
	);
};
