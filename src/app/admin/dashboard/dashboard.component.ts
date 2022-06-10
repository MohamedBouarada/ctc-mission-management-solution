import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../pages/login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  elementToShow=0;

  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isLoggedOut()){
      this.router.navigate(["/login"])
    }
  }
  handleElementToShow(index:number) {
    this.elementToShow = index ;
  }
  logout(){
    this.authService.logout()
  }

}
