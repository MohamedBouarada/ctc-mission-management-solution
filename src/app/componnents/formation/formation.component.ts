import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  validateForm!: FormGroup;
  textl: string = 'Add course';

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const dummyCourse = {
        ...this.validateForm.value,
        instructedBy:"1",
        plannedBy:"1"
      }
      this.http.post('http://localhost:3000/courses/',dummyCourse).subscribe(
        responseData=>{console.log(responseData);}
      );
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  AddCourse() {
    console.log('submit', this.validateForm.value);
  }

  constructor(private fb: FormBuilder,private http:HttpClient) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      address: [null, [Validators.required]],
      price: [null, [Validators.required]],
      capacity: [null, [Validators.required]],
      description : [null, [Validators.required]]
    });
  }
}
