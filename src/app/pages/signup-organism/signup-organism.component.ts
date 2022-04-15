import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-organism',
  templateUrl: './signup-organism.component.html',
  styleUrls: ['./signup-organism.component.scss']
})
export class SignupOrganismComponent implements OnInit {

  validateForm!: FormGroup;
  textl:string="next";

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      activity: [null, [Validators.required]],
      nature: [null, [Validators.required]],
    });
  }
}
