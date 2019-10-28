import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import {ShowComponent} from './components/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'superheroes/:id/show',
    component: ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
