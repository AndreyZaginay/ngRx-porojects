export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string
}

export interface CommentsState {
    commentList: Comment[];
    isLoading: boolean;
}