import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogViewRoutingModule } from './blog-view-routing.module';
import { BlogViewComponent } from './blog-view.component';
import { MatCardModule } from '@angular/material/card';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BlogViewComponent,
    BlogPostComponent,
    BlogPostDetailComponent,
    BlogGridComponent,
  ],
  imports: [
    CommonModule,
    BlogViewRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class BlogViewModule {}
