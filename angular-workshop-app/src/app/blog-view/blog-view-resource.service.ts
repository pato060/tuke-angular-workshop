import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPostModel } from './blog-post/models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogViewResourceService {

  constructor(private readonly http: HttpClient) { }

  getPosts(): Observable<BlogPostModel[]> {
    return this.http.get<BlogPostModel[]>(environment.apiUrl + '/posts');
  }
}
