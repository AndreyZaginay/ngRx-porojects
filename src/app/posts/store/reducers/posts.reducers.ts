import { PostsState } from './../../models/post';
import { createReducer, on, createFeature } from '@ngrx/store';
import * as PostsActions from '../actions/posts.actions'

export const initialState: PostsState = {
    postList: [],
    isLoading: false,
}

export const postsFeature = createFeature({
    name: 'posts',
    reducer: createReducer(
        initialState,
        on(PostsActions.getPostsActions, (state) => {
            return { ...state, isLoading: true}
        }),
        on(PostsActions.getPostsActionsSuccess, (state, { posts }) => ({
            ...state, postList: posts, isLoading: false
        }))
    )
})

export const {
    name,
    reducer,
    selectPostsState,
    selectPostList,
} = postsFeature