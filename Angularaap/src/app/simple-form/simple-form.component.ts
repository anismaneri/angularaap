
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  defaultGender: string = 'Male'
  defaultValue: string = 'Angular';
  employee = new Employee();
  submitted: boolean = false;
  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'female' }
  ]
  constructor() { }


  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    this.submitted = true;
    this.employee.coursees = form.value.course;
    this.employee.username = form.value.userDetails.username;
    this.employee.email = form.value.userDetails.email;
    this.employee.gender = form.value.gender;
    form.reset();
    form.controls['course'].setValue['Angular']
    form.controls['gender'].setValue['Female']
    console.log(form.controls)
    //this.saveEmployeeData(this.employee);
  }
  saveEmployeeData(emp: Employee) {
    console.log(emp.coursees);


  }
}
