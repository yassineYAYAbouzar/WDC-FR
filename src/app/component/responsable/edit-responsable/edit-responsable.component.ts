import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResponsableService } from '../../../service/responsable/responsable.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-responsable',
  templateUrl: './edit-responsable.component.html',
  styleUrls: ['./edit-responsable.component.css']
})
export class EditResponsableComponent implements OnInit {
  responsable!: any; 
  responsableForm= new FormGroup({
    nom : new FormControl(null , Validators.required ),
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
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.responsableService.fetchDataById(params['id']).subscribe(res=>{
       
        this.responsable = res
        console.log(this.responsable)
      })
    });
  }
  onSubmit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.responsableService.updateDataById(params['id'],this.responsableForm.value).subscribe(res=>{
        this.route.navigateByUrl('/admin')
      })
    });
  }

}
