import { User } from './../models/user';
import { Observable } from 'rxjs';
import { USERS_API } from './../tokens/users.api';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly http: HttpClient, @Inject(USERS_API) private readonly api: string
  ) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.api)
  }
  removeUser(userId: number): Observable<{}> {
    return this.http.delete(`${ this.api }/${ userId }`);
  }
  editUser(updateUser: User) {
    return this.http.put(`${this.api}/${ updateUser.id }`, { updateUser })
  }
}
