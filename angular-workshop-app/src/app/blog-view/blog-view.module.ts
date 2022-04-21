import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogViewRoutingModule } from './blog-view-routing.module';
import { BlogViewComponent } from './blog-view.component';
import { MatCardModule } from '@angular/material/card';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';

@NgModule({
  declarations: [
    BlogViewComponent,
    BlogPostComponent,
    BlogPostDetailComponent,
    BlogGridComponent,
  ],
  imports: [CommonModule, BlogViewRoutingModule, MatCardModule],
})
export class BlogViewModule {}
