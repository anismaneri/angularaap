import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges {
@Input() userid: number;
pi;
  constructor() {
    this.pi = 3.14;
    console.log("HooksComponent constructor Called");
    
  }
  ngOnChanges(changes: SimpleChanges): void {

    for (const propname in changes) {
         const prop = changes[propname];

         const {previousValue,currentValue,firstChange} =prop;
        
         console.log(`prop value ${propname}`);
         console.log(`prev value ${previousValue}`);
         console.log(`current value ${currentValue}`);
         console.log(`first change ${firstChange}`);
         console.log("---------------");
         
    }
    console.log("HooksComponent constructor Called");
    
  }
// hooks
  ngOnInit() {
  console.log("HooksComponent ngOnInit Called");
  
  }

}
