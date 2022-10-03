import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-deashboard',
  templateUrl: './deashboard.component.html',
  styleUrls: ['./deashboard.component.css']
})
export class DeashboardComponent implements OnInit {

  constructor(private myservice:UserServiceService, public auth: AngularFireAuth,private rout:Router) { }
  islogedin = this.myservice.islogedin
  ngOnInit(): void {
  }
  logout(){
    this.auth.signOut()
    this.islogedin = false
    this.rout.navigate(['/login'])
    console.log(this.islogedin)
  }
}
