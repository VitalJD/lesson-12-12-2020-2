import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

type Posts = Post[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Posts>;
  ourPost: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.posts = this.http.get<Posts>('https://jsonplaceholder.typicode.com/posts')
  }

  runClick() {
    this.runClick = this.http.get<Posts>('http://localhost:4200/about/:' + 'id')
  }
}
