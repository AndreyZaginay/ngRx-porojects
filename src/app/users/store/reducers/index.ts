import { UsersState } from '../../models/user';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { usersFeature } from './users.reducers';

export interface State {
  users: UsersState
}

export const reducers: ActionReducerMap<State> = {
  users: usersFeature.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
