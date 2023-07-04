import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL= 'https://jsonplaceholder.typicode.com/';

products=[
  {name:'Laptop',id:'101'},
  {name:'mobile',id:'102'},
  {name:'Tv',id:'101'},
]
  constructor(private http: HttpClient) { }
  display() {
    alert('subscribed successfully');
  }

  getUsersData(): Observable<any> 
  {
    let users = 'users'
   return this.http.get(this.apiURL+users);
  }

  getPosts() {
    let posts='posts';
    return this.http.get(this.apiURL+ posts);
  }
}
