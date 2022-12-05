import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentsState } from './../../models/comment';
import { commentsFeature } from '../reducers/comments.reducers'


export const selectCommentList = createSelector(
    commentsFeature.selectCommentList,
    ( commentList  => commentList) 
);

export const selectPostComments = (postId: number) => {
    return createSelector(commentsFeature.selectCommentList, commentList => commentList.filter(comment => comment.postId === postId))
}