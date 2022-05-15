import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResponsableService } from '../../../service/responsable/responsable.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/app-error';
import { InvalidData } from 'src/app/common/invalid-date';
import Swal from 'sweetalert2';
import { ServerDown } from 'src/app/common/server-down';
@Component({
  selector: 'app-edit-responsable',
  templateUrl: './edit-responsable.component.html',
  styleUrls: ['./edit-responsable.component.css']
})
export class EditResponsableComponent implements OnInit {
  responsable!: any; 
  responsableForm= new FormGroup({
    nom : new FormControl(null , Validators.required ) ,
    prenom : new FormControl( null , Validators.required ),
    email : new FormControl( null , Validators.required ),
    telephone : new FormControl( null , Validators.required ),
    domaine : new FormControl( null , Validators.required ),
    password : new FormControl( null , Validators.required ),
    typeResponsable : new FormControl( null , Validators.required ),
    etat : new FormControl( null , Validators.required ),
  })

  constructor(private activatedRoute: ActivatedRoute,
              private route : Router ,
              private responsableService :ResponsableService) {
    // subscribe to router event
  }
  ngOnInit(): void {
    console.log("this.responsable")
    this.getResponsable()
  }
  getResponsable(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.responsableService.fetchDataById(params['id']).subscribe(res=>{
        this.responsable = res
        console.log("this.responsable")
        console.log(this.responsable)
      })
    });
  }
  onSubmit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.responsableService.updateDataById(params['id'],this.responsableForm.value).subscribe(res=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Responsable has been Updated',
          showConfirmButton: false,
          timer: 1700
        })
        this.route.navigateByUrl('/admin')
      })
    },(error : AppError) =>{
      if(error instanceof ServerDown){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Server Is Down!',
        })
      }
    });
  }

}
