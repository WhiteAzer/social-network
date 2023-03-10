import { FC } from 'react';
import styles from './Post.module.scss';
import classNames from 'classnames';
import { Panel } from '@/components';
import { UserStripe } from '@features/basic-components';
import { getPostAt } from './helpers/getPostAt';
import { IPost, IUser } from '@/types/data-types';
import { PropsWithClass } from '@/types/runtime-types';
import { Icon20Like as LikeIcon } from '@vkontakte/icons';
import { Icon24Comment as CommentIcon } from '@vkontakte/icons';

const mockUser: IUser = {
	id: '228',
	firstname: 'string',
	lastname: 'string',
	username: 'string',
	gender: 'male',
	avatar: null,
	entries: null,
	likes: null,
	roles: null,
	friends: null,
	following: null,
	followers: null,
	notifications: null,
};

type Props = PropsWithClass & {
	post: IPost;
};

export const Post: FC<Props> = ({ post, className }) => {
	return (
		<Panel>
			<UserStripe size={'size-s'} user={mockUser} className={styles.userStripe}>
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
					<LikeIcon fill={'#C4CCD6'} />
				</div>
				<div className={styles.actionBtns_item}>
					<span>{post.comments.length}</span>
					<CommentIcon fill={'#C4CCD6'} />
				</div>
			</div>
		</Panel>
	);
};
