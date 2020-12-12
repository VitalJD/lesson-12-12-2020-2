import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Gett {
  name: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: number
  }
  phone: number
  website: string
  company: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  gett: Gett[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Gett[]>('https://jsonplaceholder.typicode.com/users/1')
    .subscribe(response => {
      console.log('Response', response);
      this.gett = this.gett
    });
  }

}
