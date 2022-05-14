import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ActivityService } from '../../../service/activity/activity.service';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.sass']
})
export class EditActivityComponent implements OnInit {

  activity!: any; 
  activityForm= new FormGroup({
    description : new FormControl(null , Validators.required ),
    date_debuit : new FormControl( null , Validators.required ),
    date_fin : new FormControl( null , Validators.required ),
    etat : new FormControl( null , Validators.required ),
    idResponsable : new FormControl( null , Validators.required ),
    idExercise : new FormControl( null , Validators.required ),
    typeactivity : new FormControl( null , Validators.required ),
  })

  constructor(private activatedRoute: ActivatedRoute,
              private route : Router ,
              private activityService :ActivityService) {
    // subscribe to router event
  }
  ngOnInit(): void {
    console.log("this.activity")
    this.getactivity()
  }
  getactivity(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.activityService.fetchDataById(params['id']).subscribe(res=>{
        this.activity = res
        console.log("this.activity")
        console.log(this.activity)
      })
    });
  }
  onSubmit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.activityService.updateDataById(params['id'],this.activityForm.value).subscribe(res=>{
        this.route.navigateByUrl('/admin/listActivity')
      })
    });
  }


}
