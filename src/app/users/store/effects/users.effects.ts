import { UsersService } from '../../services/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UsersActions from '../actions/users.actions';
import { map, mergeMap, switchMap } from 'rxjs';
import { User } from '../../models/user';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.getUsersActions),
      switchMap(() => this.usersService.getUsers().pipe(
        map((users: User[]) => UsersActions.getUsersActionsSuccess({ users }))
      ))
    );
  })

  removeUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.removeUserActions),
      mergeMap(({ userId }) => this.usersService.removeUser(userId).pipe(
        map(() => UsersActions.removeUserActionsSuccess({ userId }))
      ))
    )
  })

  editUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.editUser),
      mergeMap(({ updateUser }) => this.usersService.editUser(updateUser).pipe(
        map(() => UsersActions.editUserSuccess({ updateUser }))
      ))
    )
  })

  constructor(private actions$: Actions, private readonly usersService: UsersService) {}
}