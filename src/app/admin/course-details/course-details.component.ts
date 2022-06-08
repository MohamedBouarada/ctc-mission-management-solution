import { Component, OnInit } from '@angular/core';
import {CourseDetailsServiceService} from "./course-details-service.service";
import {map} from "rxjs/operators";
import {ICourseDetails} from "./courseDetailsInterface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  coursesDetails : ICourseDetails ={
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    description:"",
    address:"",
    capacity:"",
    price:"",
    createdAt:"",
    updatedAt:"",
    deletedAt:"",
    "instructedBy": {
      "createdAt": "",
      "deletedAt": "",
      "updatedAt": "",
      "id": "",
      "cv": "",
      "startDate": "",
      "endDate": "",
      "user": {
        "createdAt": "",
        "deletedAt": "",
        "updatedAt": "",
        "id": "",
        "firstName": "",
        "lastName": "",
        "cin": "",
        "email": "",
        "phoneNumber": "",
        "role": "",
      }
    },
    "plannedBy": {
      "Id": "",
      "userName": ""
    }
  } ;
  courseId : string|null="";
  isDataFetched = false;
  constructor( private courseDetailsService:CourseDetailsServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.courseDetailsService.getCourseDetails(this.courseId).pipe(map(
      (responseData)=>{
        console.log(responseData)
        return responseData;
      }
    )).subscribe(
      (user)=>{console.log(user);
        this.coursesDetails=user;
        this.isDataFetched=true;
        console.log(this.coursesDetails);
      }
    );
  }

}
