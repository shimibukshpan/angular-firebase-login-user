import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: firebase.auth.UserCredential | undefined;

  constructor(private rout:Router,public auth: AngularFireAuth, private myservice:UserServiceService) { }

  ngOnInit(): void {
  }
  islogedin = this.myservice.islogedin

  login(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email, password).then((user:firebase.auth.UserCredential)=>{
      this.user=user
      console.log(user)
      this.islogedin = true
      this.rout.navigate(['/deshboard'])
      console.log(this.islogedin)
    })
    
  }

}
