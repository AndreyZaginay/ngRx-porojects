import { CommentsState } from './../../posts/comments/models/comment';
import { PostsState } from './../../posts/models/post';
import { UsersState } from "src/app/users/models/user";

export interface AppState {
    users: UsersState;
    posts: PostsState;
    comments: CommentsState;
}