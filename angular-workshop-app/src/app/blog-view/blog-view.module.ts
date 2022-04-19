import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogViewRoutingModule } from './blog-view-routing.module';
import { BlogViewComponent } from './blog-view.component';
import { MatCardModule } from '@angular/material/card';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [BlogViewComponent, BlogPostComponent],
  imports: [CommonModule, BlogViewRoutingModule, MatCardModule],
})
export class BlogViewModule {}
