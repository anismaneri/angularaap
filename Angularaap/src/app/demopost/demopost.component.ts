import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  constructor(private _postService: PostService) { }

arrPosts: post[] = [];

  ngOnInit() {
    this._postService.getPost().subscribe(res =>{
       this.arrPosts= res;
       
    })
  }

}
