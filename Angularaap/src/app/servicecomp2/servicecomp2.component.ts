import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
  products={};
  
  constructor(private _demoService: DemoService) { }
 

  ngOnInit() {
    this.products= this._demoService.products;
  }
  OnSubscribe(){
    this._demoService.display();
  }
}
