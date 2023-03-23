import styles from './Post.module.scss';
import classNames from 'classnames';
import { FC, useContext } from 'react';
import { Panel } from '@/components';
import { UserStripe } from '@features/basic-components';
import { IPost, IUser } from '@/types/data-types';
import { PropsWithClass } from '@/types/runtime-types';
import { Icon20Like as IconLike } from '@vkontakte/icons';
import { Icon24Comment as IconComment } from '@vkontakte/icons';
import { getPostAt } from '@features/basic-components/utils';

type Props = PropsWithClass & {
	post: IPost;
};

export const Post: FC<Props> = ({ post, className }) => {
	return (
		<Panel className={className}>
			<UserStripe size={'size-s'} user={post.author} className={styles.userStripe}>
				{getPostAt(+post.createdAt)}
			</UserStripe>
			<div className={styles.text}>{post.content.text}</div>
			<div className={styles.imgs}>
				{!!post.content.images.length &&
					post.content.images.map((el: string) => (
						<img src={el} className={styles.img} key={el} />
					))}
			</div>
			<div className={styles.actionBtns}>
				<div className={styles.actionBtns_item}>
					<span>{post.likes}</span>
					<IconLike />
				</div>
				<div className={styles.actionBtns_item}>
					<span>{post.comments.length}</span>
					<IconComment />
				</div>
			</div>
		</Panel>
	);
};
