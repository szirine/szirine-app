import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { LongPost } from 'src/app/classes/wp/long-post';

@Injectable({
  providedIn: 'root'
})

export class SzirineService {

baseUrl = 'http://szirine.com/wp-json/wp/v2/';

constructor(private  httpClient: HttpClient) { }

getPosts(): Observable<LongPost[]> {
  return this.httpClient
  .get<LongPost[]>( this.baseUrl + 'posts' );
}

getPost(postId: number): Observable<LongPost> {
  return this.httpClient
  .get<LongPost>( this.baseUrl + `posts/${postId}` );
}

}