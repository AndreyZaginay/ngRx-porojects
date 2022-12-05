import { InjectionToken } from "@angular/core";

export const POSTS_API = new InjectionToken<string>('jsonplaceholder api for posts', { factory: () => 'https://jsonplaceholder.typicode.com/posts' })
