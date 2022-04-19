import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostModel } from './blog-post/models/blog-post.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  postsData: BlogPostModel[] = [];

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute?.data?.pipe(
      ).subscribe(
      ({ posts }) => {
        this.postsData = posts as BlogPostModel[];
      }
    );
  }
}
