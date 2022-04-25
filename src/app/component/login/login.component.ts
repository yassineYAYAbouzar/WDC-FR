import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/auth/login.service';
import { TokenService } from '../../service/token.service';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginPage : boolean = false

  loginForm= new FormGroup({
    username : new FormControl( null , Validators.required ),
    password : new FormControl( null , [Validators.required , Validators.minLength(6) , Validators.maxLength(12)])
  })

  registerForm= new FormGroup({
    nom : new FormControl( null , Validators.required ),
    prenom : new FormControl( null , Validators.required ),
    email : new FormControl( null , Validators.required ),
    telephone : new FormControl( null , Validators.required ),
    domaine : new FormControl( null , Validators.required ),
    password : new FormControl( null , Validators.required ),
    structure : new FormControl( null , Validators.required ),
  })

  constructor(private loginService : LoginService ,
              private tokenService:TokenService ,
              private route : Router ,
              private accountService : AccountService) { }

  ngOnInit(): void {
  }


  onSubmiyt(){
    this.loginService.onSubmit(this.loginForm.value).subscribe(
      res =>{
        this.handleResponse(res)
      }
    )
  }


  onRegister(){
    this.loginService.onRegister(this.registerForm.value).subscribe(
      res =>{
        this.loginPage = true
      }
    )
  }
  
  handleResponse(res : any){
    this.tokenService.handle(res)
    this.accountService.changeStatus(true)
    this.route.navigateByUrl('/admin')
  }

}
