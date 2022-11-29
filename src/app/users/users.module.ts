import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersService } from './services/users.service';
import { UsersComponent } from './users.component';
import { usersFeature } from './store/reducers/users.reducers';
import { UsersEffects } from './store/effects/users.effects';
import { UserComponent } from './user/user.component';
import { SharedsModule } from '../shareds/shareds.module';


const routes: Routes = [
{
  path: '',
  component: UsersComponent
},
{
  path: ':id',
  component: UserComponent
}
]

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedsModule,
      HttpClientModule,
      MatButtonModule,
      MatTableModule,
      MatInputModule,
      MatIconModule,
      ReactiveFormsModule,
      FormsModule,
      StoreModule.forFeature(usersFeature),
      EffectsModule.forFeature([UsersEffects]),
    ],
    providers: [UsersService],
  })
export class UsersModule { }
