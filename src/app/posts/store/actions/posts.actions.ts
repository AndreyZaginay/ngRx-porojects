import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post';

export const getPostsActions = createAction('[POSTS] get posts');
export const getPostsActionsSuccess = createAction('[POSTS] get posts success', props<{posts: Post[]}>());