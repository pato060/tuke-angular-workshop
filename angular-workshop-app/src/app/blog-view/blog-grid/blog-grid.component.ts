import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostModel } from '../blog-post/models/blog-post.model';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss'],
})
export class BlogGridComponent implements OnInit {
  postsData: BlogPostModel[] = [];

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute?.data?.pipe().subscribe(({ posts }) => {
      this.postsData = posts as BlogPostModel[];
    });
  }
}
