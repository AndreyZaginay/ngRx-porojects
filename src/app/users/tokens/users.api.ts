import { InjectionToken } from "@angular/core";

export const USERS_API = new InjectionToken<string>('jsonplaceholder api for users', { factory: () => 'https://jsonplaceholder.typicode.com/users' })
