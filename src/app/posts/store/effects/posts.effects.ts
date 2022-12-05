import { PostsService } from './../../services/posts.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';

import * as PostsActions from '../actions/posts.actions'
import { Post } from '../../models/post';

@Injectable()
export class PostsEffects {

    getPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.getPostsActions),
            switchMap(() => this.postsService.getPosts().pipe(
                map((posts: Post[]) => PostsActions.getPostsActionsSuccess({ posts }))
            ))
        )
    })

    constructor(
        private readonly actions$: Actions, 
        private readonly postsService: PostsService
    ){}
}