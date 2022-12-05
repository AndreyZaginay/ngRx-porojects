import { PostsService } from './services/posts.service';
import { postsFeature } from './store/reducers/posts.reducers';
import { StoreModule } from '@ngrx/store';
import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects/posts.effects';
import { CommentsModule } from "./comments/comments.module";
const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: ':id',
    component: PostComponent
  }
]

@NgModule({
    declarations: [
        PostsComponent,
        PostComponent, 
        ],
        imports: [
          CommonModule,
          CommentsModule,
          RouterModule.forChild(routes),
          StoreModule.forFeature(postsFeature),
          EffectsModule.forFeature([PostsEffects]),
        ],
        providers: [PostsService],
})
export class PostsModule { }
