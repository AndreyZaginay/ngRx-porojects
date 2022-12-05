import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../../models/user';

export const featureSelector = createFeatureSelector<UsersState>('users');

export const selectUsersList = createSelector(
    featureSelector,
    state => state.userList
);

export const selectUser = (userId: number) => {
  return  createSelector(selectUsersList, ((userList) => userList.find(user => user.id === userId)!))
}

export const selectIsloading = createSelector(
  featureSelector,
  state => state.isLoading
)