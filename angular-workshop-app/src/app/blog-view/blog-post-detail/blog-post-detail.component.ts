import { ActivatedRoute } from '@angular/router';
import { BlogPostModel } from './../blog-post/models/blog-post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.scss'],
})
export class BlogPostDetailComponent implements OnInit {
  postDetail!: BlogPostModel;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data?.subscribe(({ post }) => {
      this.postDetail = post as BlogPostModel;
    });
  }
}
