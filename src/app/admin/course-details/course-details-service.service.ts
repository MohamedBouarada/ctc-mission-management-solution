import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {ICourseDetails} from "./courseDetailsInterface";

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsServiceService {
url = environment.baseApiUrl + "/courses/"

  constructor(private http:HttpClient ) { }

  getCourseDetails( courseId:string|null){

    return this.http.get<ICourseDetails>(this.url+ courseId);

  }

}
