import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const getUsersActions = createAction('[USERS] get users list');
export const getUsersActionsSuccess = createAction('[USERS] get users list success', props<{ users: User[] }>());

export const removeUserActions = createAction('[USERS] remove user', props<{ userId: number }>());
export const removeUserActionsSuccess = createAction('[USERS] remove user success', props<{ userId: number }>());

export const editUser = createAction('[USERS] edit user', props<{updateUser: User}>());
export const editUserSuccess = createAction('[USERS] edit user success', props<{updateUser: User}>());