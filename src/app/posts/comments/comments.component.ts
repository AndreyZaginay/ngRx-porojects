import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CommentsState } from './models/comment';
import {  selectCommentList, selectPostComments } from './store/selectors/comments.selectors';
import { Comment } from './models/comment';
import * as CommentsActions from './store/actions/comments.actionst';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

@Input()
postId!: number;
comments$?: Observable<Comment[]>;


  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(CommentsActions.getCommentsActions());
    this.comments$ = this.store.select(selectPostComments(this.postId));
  }

} 
