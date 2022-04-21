import { BlogViewResourceService } from './../blog-view-resource.service';
import { BlogPostModel } from './../blog-post/models/blog-post.model';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogPostDetailResolver implements Resolve<BlogPostModel> {
  constructor(
    private readonly blogViewResourceService: BlogViewResourceService,
    private readonly router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BlogPostModel> {
    let postId: number = Number(route.paramMap.get('id'));

    if (isNaN(postId)) {
      this.router.navigate(['/posts']);
      return of();
    }
    return this.blogViewResourceService.getPostById(postId);
  }
}
