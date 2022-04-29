import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';
import {  MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

export interface Course {
  name: string;
}
@Component({
  selector: 'app-signup-instructor',
  templateUrl: './signup-instructor.component.html',
  styleUrls: ['./signup-instructor.component.scss']
})
export class SignupInstructorComponent implements OnInit {
  validateForm!: FormGroup;
  textl:string="signup";
  successMessage=false;
  errorMessage!:string[];
  addOnBlur = true;
  plainFooter = 'plain extra footer';


  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  courses: Course[] = [];
  fixedCourses :string[] = ['Javascript', 'PHP', 'Flutter', 'Symfony', 'JEE'];
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our Course
    if (value) {
      this.courses.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(course: Course): void {
    const index = this.courses.indexOf(course);

    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.courses.push({name:event.option.viewValue});
    
  }
  constructor(private fb: FormBuilder,private http:HttpClient) {
    
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
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      cin: [null, [Validators.required]],
      password: [null, [Validators.required]],
      cpassword: [null, [Validators.required]],
    });
  }

}
