import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filpterpipe',
  templateUrl: './filpterpipe.component.html',
  styleUrls: ['./filpterpipe.component.css']
})
export class FilpterpipeComponent implements OnInit {

namesearch : string='';
productArr : any[] = [
  {
  sno: 1,
  name : 'Mobile',
  price: '7000 Rs',
  availability: 'Available'
},
{
  sno: 2,
  name : 'TV',
  price: '17000 Rs',
  availability: 'Available'
},
{
  sno: 3,
  name : 'Washing Machine',
  price: '170000 Rs',
  availability: 'Not Available'
},
{
  sno: 4,
  name : 'Tab',
  price: '350000 Rs',
  availability: 'Not Available'
},
]
  constructor() { }

  ngOnInit() {
  }
  
  AddProduct(productname){
    alert('Called Success');
    this.productArr.push({
      sno: 5,
      name : productname.value,
      price: '135000 Rs',
      availability: 'Not Available'
    })
  }
}
