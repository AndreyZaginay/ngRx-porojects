import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';

import * as CommentsACtions from '../actions/comments.actionst';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment';


@Injectable()
export class CommentsEffects {
    getComments$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CommentsACtions.getCommentsActions),
            switchMap(() => this.commentsSecvice.getComments().pipe(
                map((comments: Comment[]) => CommentsACtions.getCommentsActionsSuccess({ comments }))
            ))
        )
    })

    constructor(
        private readonly actions$: Actions,
        private readonly commentsSecvice: CommentsService
    ){}
}