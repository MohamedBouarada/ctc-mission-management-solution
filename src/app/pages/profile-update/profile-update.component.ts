import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment';

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

  editForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    dateBirth: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    postalCode: new FormControl(''),

  });
  passwordForm=new FormGroup({

  })
  constructor(private fb: FormBuilder,private http:HttpClient) {}
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  submitForm(): void {
    if (this.editForm.valid) {
      console.log('submit', this.validateForm.value);
      this.http.put(environment.baseApiUrl+'/user/edit-profile',{...this.editForm.value}).subscribe(
        responseData=>{
          console.log(responseData);
          this.successMessage=true;
        },
        error=>{
          console.log(error);
          this.errorMessage=error.error.message;
          console.log(this.errorMessage);}
      );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  submitFormPassword():void{

  }
  ngOnInit(): void {

    //changer validateForm par editForm in html pour le form 1 et par editFormPassword pour le form 2
    

    // this.http.get('http://localhost:3000/user').subscribe(
    //   responseData=>{
    //     console.log(responseData);
    //     this.successMessage=true;
    //     this.editForm = new FormGroup({
    //       firstName: new FormControl(responseData['firstName']),
    //       lastName: new FormControl(responseData['lastName']),
    //       email: new FormControl(responseData['email']),
    //       dateBirth: new FormControl(responseData['dateBirth']),
    //       city: new FormControl(responseData['city']),
    //       address: new FormControl(responseData['address']),
    //       postalCode: new FormControl(responseData['postalCode']),
    //     });
    //   },
    //   error=>{
    //     console.log(error);
    //     this.errorMessage=error.error.message;
    //     console.log(this.errorMessage);}
    // );


    //supprimer ce validate form apres avoir fixé les 2 autres formGroup
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
