import { Comment } from './../models/comment';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COMMENTS_API } from '../tokens/comments.api';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private readonly http: HttpClient, @Inject(COMMENTS_API) private readonly api: string
  ) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.api);
  }
}
