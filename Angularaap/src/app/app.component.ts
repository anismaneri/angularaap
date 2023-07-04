import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private _demoService: DemoService,private _postService: PostService) {

  }
  ngOnInit(): void {
    this._demoService.getUsersData().subscribe(data => {
      console.log('getting data from api AppCompound', data);
      
    })
this._demoService.getPosts().subscribe(result =>{
  console.log('posts', result);
  
})
  }
  public uid: number;
  title = 'angularapp';
  uname = 'I am good developer';

  foods:string[] = [];

  getDataFromChild(value){
    console.log(value);
    this.foods.push(value);
  }
  DeletePost(){
    this._postService.deletePostById(1).subscribe(res => {
      console.log(res);
      
    })
  }
}
