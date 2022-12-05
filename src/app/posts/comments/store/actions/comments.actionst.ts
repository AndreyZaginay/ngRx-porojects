import { createAction, props } from '@ngrx/store';
import { Comment } from '../../models/comment';
export const getCommentsActions = createAction('[COMMENTS] get comments');
export const getCommentsActionsSuccess = createAction('[COMMENTS] get comments success', props<{ comments: Comment[] }>());