import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
// @Input() myinputMsg: string;
 @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();

  
  constructor() { }

  ngOnInit() {
   // console.log('from parent', this.myinputMsg);
   

  }
  // function will call once user enter text box value
addtofood(value){
  //foodeventis noting but your custom event
   this.foodevent.emit(value);
}
}
