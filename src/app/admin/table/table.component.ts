import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsersTableService } from './users-table.service';
import { IUsers } from './usersInterface';








@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  j=0;
  i = 0;
  editId: string | null = null;
  listOfData: IUsers[] = [];

constructor(private usersTable:UsersTableService){}

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        firstName: `Edward`,
        lastName:`King ${this.i}`,
        email: 'test@gmail.com',
        telephone: `216${this.i}`,
        cin:'1212121',
        password:'*****'
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
   this.usersTable.getUsers().pipe(map(
     (responseData)=>{
       const usersArray=[];
       for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            usersArray.push({...responseData[key]});
          }
       }
       return usersArray[0];
     }
   )).subscribe(
     (data)=>{console.log(data);
      this.listOfData.push(data);
      console.log(this.listOfData);
    }
   );
  }
  }


