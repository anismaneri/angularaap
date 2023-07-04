import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Key, promise } from 'protractor';
import { Observable, from, interval } from 'rxjs';
import { resolve } from 'url';
import { FireBasePost } from '../models/firebasepost';
import { FirebaseService } from '../services/firebase.service';
import { filter, map, take, takeLast, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitted: boolean = false;
  notAllowedNames =['Codemind','Technology'];
genders=[
  {
    id:'1',
    value: 'Male'
  },
  {
    id:'2',
    value: 'Female'
  }
]
  myReactiveForm:FormGroup;
  firebasePost : FireBasePost;
  constructor(private _fb: FormBuilder, private _fireBaseService: FirebaseService) {
    this.createForm();
   }

  ngOnInit(){

   
     
  // data.pipe(
   // map (x => x.name + '' + 'data')
   //).subscribe(res => {
    //console.log('res', res);
    
  // })

//   const data = from(this._fireBaseService.user);

//   data.pipe(
//     filter( u => u.gender == 'Female'),
//     toArray()
//   ).subscribe(res =>{
// console.log('filter operator', res);

//   })
  
// Take operator
   
// const sourse = interval();
// sourse.pipe(
//   take(5)).subscribe(res =>{
//   console.log('interval example', res);
  
// })

// Take last

let randomsName =['Dnyanase','Codemind','Angular','HTML','JavaScript','TypeScript'];

const sourse =from(randomsName);

sourse.pipe(
  takeLast(2)
).subscribe(res =>{
console.log('take Last operator', res);

})

  //  this._fireBaseService.getPostDataFireBase().pipe(
  //   map( responseData =>{
  //     //empty array
  //     const postArray = [];
  //     //for in loop
  //  for( const key in responseData){
  //   // check key
  //     if(responseData.hasOwnProperty(key)){
  //       //push new value in to array
  //       postArray.push({...responseData[key], id:key})
  //     }
  //   }
  //   return postArray;
  //   })
  //  )
  //  .subscribe(res => {
  //      console.log('after manipulator data',res);
  //   })

//setTimeout(() =>{
//this.myReactiveForm.setValue({
 // 'userDetails':{
    //'username':'Codemind1122',
   // 'email': 'test@gamil.com',
  //},
  //'course':'HTML',
 // 'gender':'Male'
//})
 // },3500);
 // }
////setTimeout(() => {
  
//this.myReactiveForm.patchValue({
 // 'userDetails':{
   // 'username':'Codemind1122',
   // 'email': 'test@gamil.com',
// }
//})
 // },3500);
}
  
createForm(){
 // this.myReactiveForm = new FormGroup({
   // 'userDetails':new FormGroup({
    //  'username': new FormControl('', [Validators.required,this.NaName.bind(this)]),
     // 'email': new FormControl('',[Validators.required, Validators.email], this.NaEmails)
   // }),
  //  'course': new FormControl(''),
  //  'gender': new FormControl(''),
  //  'skills': new FormArray([
 //     new FormControl(null, Validators.required)
 //   ])
  //})
  this.myReactiveForm =this._fb.group({
userDetails: this._fb.group({
username:['', Validators.required],
email:['', Validators.required]
}),
course:['Angular'],
gender:['Male'],
skills:this._fb.array([])
  })
}
OnSubmit(){
  this.submitted = true;
  console.log(this.myReactiveForm);
  //console.log(this.myReactiveForm['controls'].userDetails['controls'].username.value);
  
  this.firebasePost =new FireBasePost();
  this.firebasePost.username = this.myReactiveForm['controls'].userDetails['controls'].username.value;
  this.firebasePost.email = this.myReactiveForm['controls'].userDetails['controls'].email.value;
  this.firebasePost.course = this.myReactiveForm['controls'].course.value;
  this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
  this.firebasePost.skills = this.myReactiveForm['controls'].skills.value;

  //console.log('firebase post class', this.firebasePost);
  
  this._fireBaseService.createPostDataReactiveForm(this.firebasePost).subscribe( res => {
    console.log('post from reactive form', res);
    
  })
  
}
OnAddSkills(){
  (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
}
NaName(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value) !== -1){ 
    return{'nameNotAllowed': true}
  }
  return null;
}
NaEmails(control:FormControl): Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve,reject) => {
    setTimeout(() => {
if(control.value === 'codemindtechnology@gmail.com'){
  resolve({'emailNotAllowed': true})
}else{
  resolve(null)
    }
  },5000);
})
return myResponse;
}
}
