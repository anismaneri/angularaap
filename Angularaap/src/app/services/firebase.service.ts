import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

url = 'https://angular-crud-operation-2-default-rtdb.firebaseio.com/';

  constructor(private _httpClient:HttpClient) { }

  user: any[]= [
    { id:'101', name:'Dnynaesh', gender:'Male'},
    {id:'102', name:'Jack', gender:'Male'},
    {id:'103', name:'Sifa', gender:'Female'}
  ]

  createPost() 
  {
    let postData = {
      title : 'This is angular 8 crud ',
      content : 'This is firebase crud operation with post'
    }

    return this._httpClient.post(this.url + 'posts.json', postData);
  }
  createPostDataReactiveForm(fireBasePost: FireBasePost) {
    return this._httpClient.post(this.url + 'posts.json', fireBasePost);
  }
   getPostDataFireBase(){
     return this._httpClient.get(this.url + 'posts.json');
   }
}
