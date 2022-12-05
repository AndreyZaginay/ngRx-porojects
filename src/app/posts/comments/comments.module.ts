import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { CommentsComponent } from './comments.component';
import { commentsFeature } from './store/reducers/comments.reducers';
import { CommentsEffects } from './store/effects/comments.effects';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(commentsFeature),
    EffectsModule.forFeature([CommentsEffects]),
  ],
  exports: [CommentsComponent]
})
export class CommentsModule { }
