import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostDetailComponent } from './blog-view/blog-post/blog-post-detail/blog-post-detail.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./blog-view/blog-view.module').then(m => m.BlogViewModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
