import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  validateForm!: FormGroup;
  textl:string="update";
  text2:string="Modify Password";
  date="13/10/2000";
  successMessage=false;
  errorMessage!:string[];
  constructor(private fb: FormBuilder,private http:HttpClient) {}
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  submitForm(): void {
    
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
