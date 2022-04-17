import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {


  ContactARr = [{id:1 , name :"email"},{id:2 , name :"SMS"} , {id:3 , name :"phone"}]

  
  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    email: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("",Validators.required),
  })


  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }

  submit(f :any){
    console.log(f)
  }
}
