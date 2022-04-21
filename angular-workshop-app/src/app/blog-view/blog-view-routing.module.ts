import { BlogPostDetailResolver } from './blog-post-detail/blog-post-detail-resolver.service';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridResolver } from './blog-grid/blog-view-resolver.service';
import { BlogViewComponent } from './blog-view.component';

const routes: Routes = [
  {
    path: '',
    component: BlogViewComponent,
    children: [
      {
        path: '',
        component: BlogGridComponent,
        resolve: {
          posts: BlogGridResolver,
        },
      },
      {
        path: 'detail/:id',
        component: BlogPostDetailComponent,
        resolve: {
          post: BlogPostDetailResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogViewRoutingModule {}
