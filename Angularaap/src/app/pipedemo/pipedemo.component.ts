import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
price: Number = 500000;
  obser;
todaysDate = new Date();
obj ={id:'101',Name:'test1'}
  constructor(private _utilityService: UtilityService) { 
    this.obser=this. _utilityService.userName;
  }

  ngOnInit() {
  }

}
