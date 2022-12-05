import { InjectionToken } from "@angular/core";

export const COMMENTS_API = new InjectionToken<string>('jsonplaceholder api for comments', { factory: () => 'https://jsonplaceholder.typicode.com/comments' })
