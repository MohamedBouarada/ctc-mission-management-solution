import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-course-enroll-confirmation',
  templateUrl: './course-enroll-confirmation.component.html',
  styleUrls: ['./course-enroll-confirmation.component.scss']
})
export class CourseEnrollConfirmationComponent implements OnInit {
  validateForm!: FormGroup;
  validateFormNumber!: FormGroup;
  size=1;
  textl:string="submit enrollment";
  successMessage=false;
  showNext=false
  showContainer=false
  errorMessage=false;
  listOfControl: Array<{ id: number; controlInstance: string ; controlEmail:string }> = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateFormNumber = this.fb.group({
      number: [null, [Validators.required]],

    })

    this.validateForm = this.fb.group({});
    this.addField();
  }


  changeShowContainer(b:boolean) {
    this.showContainer=b;
  }

  submitFormNumber():void {
    console.log(this.validateFormNumber.value)
    this.size= this.validateFormNumber.value.number;
    this.showNext=true;
  }


  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `fullName`,
      controlEmail : `email`

    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,

      new FormControl(null, Validators.required)
    );
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlEmail,

      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string;controlEmail:string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  }
