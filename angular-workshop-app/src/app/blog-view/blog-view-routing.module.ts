import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogViewResolver } from './blog-view-resolver.service';
import { BlogViewComponent } from './blog-view.component';

const routes: Routes = [
  {
    path: '',
    component: BlogViewComponent,
    children: [
      {
        path: 'posts/:id',
        loadChildren: () => import('./blog-post/blog-post-detail/blog-post-detail.module').then(m => m.BlogPostDetailModule)
      }
    ],
    resolve: {
      posts: BlogViewResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogViewRoutingModule { }
