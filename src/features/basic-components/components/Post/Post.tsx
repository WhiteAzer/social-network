import { FC } from 'react';
import styles from './Post.module.scss';
import classNames from 'classnames';
import { Comment, EntryType, ID, PartialUser, Post as TPost, PropsWithClass } from '@/types';
import { Panel } from '@/components';
import { UserStripe } from '@features/basic-components';
import { user } from '@/data';
import { getPostAt } from './helpers/getPostAt';

type Props = PropsWithClass & {
	post: TPost;
};

export const Post: FC<Props> = ({ post, className }) => {
	return (
		<Panel>
			<UserStripe size={'size-s'} user={user}>
				{getPostAt(+post.createdAt)}
			</UserStripe>
		</Panel>
	);
};
