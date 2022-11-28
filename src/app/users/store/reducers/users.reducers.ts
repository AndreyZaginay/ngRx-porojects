import { createReducer, on, createFeature } from '@ngrx/store';
import { UsersState } from '../../models/user';
import * as UsersActions from '../actions/users.actions';

export const initialState: UsersState = {
    userList: []
}

export const usersFeature = createFeature({
    name: 'users',
    reducer: createReducer(
        initialState,
        on(UsersActions.getUsersActionsSuccess, (state, { users }) => ({
            ...state,
            userList: users 
        })),
        on(UsersActions.removeUserActionsSuccess, (state, { userId }) => {
            return { ...state, userList: state.userList.filter(user => user.id !== userId) }
        }),
        on(UsersActions.editUserSuccess, (state, { updateUser }) => {
            const userList = [...state.userList];
            const user = userList.find(user => user.id === updateUser.id)!;
            const index = userList.indexOf(user);
            userList.splice(index, 1, updateUser)
            return {...state, userList}
        })
    )
}

)