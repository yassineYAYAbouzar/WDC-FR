import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExerciceActivityService } from 'src/app/service/exercice/exercice-activity.service';

@Component({
  selector: 'app-update-exrcice',
  templateUrl: './update-exrcice.component.html',
  styleUrls: ['./update-exrcice.component.sass']
})
export class UpdateExrciceComponent implements OnInit {

  exercice!: any; 
  exerciceForm= new FormGroup({
    annee : new FormControl(null , Validators.required ),
    dateDebuit : new FormControl( null , Validators.required ),
    dateFin : new FormControl( null , Validators.required ),
    status : new FormControl( null , Validators.required ),
  })

  constructor(private activatedRoute: ActivatedRoute,
              private route : Router ,
              private exerciceService :ExerciceActivityService) {
    // subscribe to router event
  }
  ngOnInit(): void {
    console.log("this.activity")
    this.getactivity()
  }
  getactivity(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.exerciceService.fetchDataById(params['id']).subscribe(res=>{
        this.exercice = res
      })
    });
  }
  onSubmit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.exerciceService.updateDataById(params['id'],this.exerciceForm.value).subscribe(res=>{
        this.route.navigateByUrl('/admin/listExrcice')
      })
    });
  }



}
