import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostModel } from './models/blog-post.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() data: BlogPostModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openPost(): void {
    if (this.data) {
      this.router.navigate([`posts/${ this.data?.id }`]);
    }
  }
}
