import { POSTS_API } from './../tokens/posts.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private readonly http: HttpClient, @Inject(POSTS_API) private readonly api: string
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api)
  }
}
