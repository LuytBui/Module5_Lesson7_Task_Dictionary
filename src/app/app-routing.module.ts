import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageComponent} from './dictionary/page/page.component';
import {DetailComponent} from './dictionary/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full'
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: 'details/:word',
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
