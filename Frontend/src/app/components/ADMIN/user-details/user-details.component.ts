import { Component, OnInit } from '@angular/core';
import { LoginRegisterServiceService } from 'src/Service/login-register-service.service';
import { LoginStatusService } from 'src/Service/login-status.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  isChecked:boolean=true

  userData:any=[]

  constructor(
    private service:LoginRegisterServiceService
  ) { }

  ngOnInit(): void {
    
    this.service.getAllRegisterData().subscribe(
      (data)=>{
        this.userData=data;
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }

  updateValue(id:any){
    console.log("fashgdc"+id);
    this.service.updateData(id).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }



}
