import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppError } from 'src/app/common/app-error';
import { InvalidData } from 'src/app/common/invalid-date';
import Swal from 'sweetalert2';
import { ResponsableService } from '../../../service/responsable/responsable.service';
@Component({
  selector: 'app-add-responsable',
  templateUrl: './add-responsable.component.html',
  styleUrls: ['./add-responsable.component.css']
})
export class AddResponsableComponent implements OnInit {
  responsableForm= new FormGroup({
    nom : new FormControl( null , Validators.required ),
    prenom : new FormControl( null , Validators.required ),
    email : new FormControl( null , Validators.required ),
    telephone : new FormControl( null , Validators.required ),
    domaine : new FormControl( null , Validators.required ),
    password : new FormControl( null , Validators.required ),
    typeResponsable : new FormControl( null , Validators.required ),
    etat : new FormControl( null , Validators.required ),
    structure : new FormControl( null , Validators.required ),
  })
  constructor( private route : Router ,private responsableService :ResponsableService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.responsableService.addData(this.responsableForm.value).subscribe(res=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Responsable has been saved',
        showConfirmButton: false,
        timer: 1700
      })
      this.route.navigateByUrl('/admin')
    },(error : AppError) =>{
      if(error instanceof InvalidData){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Enter Valid Information!',
        })
      }
    })
  }
  
}
