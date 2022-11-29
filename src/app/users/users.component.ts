import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, UsersState } from './models/user';
import * as UsersActions from './store/actions/users.actions';
import { selectUsersList, selectIsloading } from './store/selectors/users.selectors';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'name', 'email', 'phone', 'website', 'editAction','deleteAction'];
  users$: Observable<User[]> = this.store.select(selectUsersList);
  isLoading$: Observable<boolean> = this.store.select(selectIsloading);

  constructor(
    private readonly store: Store<UsersState>,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {    
    this.store.dispatch(UsersActions.getUsersActions());
  }

  remove(userId: number): void {
    this.store.dispatch(UsersActions.removeUserActions({ userId }))
  }

  fullInfo(user: User): void{
    this.router.navigate([`/users/${user.id}`]);
  }

}
