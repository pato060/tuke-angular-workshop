import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPostModel } from './blog-post/models/blog-post.model';
import { BlogViewResourceService } from './blog-view-resource.service';

@Injectable({
  providedIn: 'root'
})
export class BlogViewResolver implements Resolve<Observable<BlogPostModel[]>> {

  constructor(private readonly blogViewResourceService: BlogViewResourceService) { }

  resolve(): Observable<BlogPostModel[]> {
    return this.blogViewResourceService.getPosts();
  }
}
