import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from '../../../service/activity/activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.sass']
})
export class AddActivityComponent implements OnInit {
  activityForm= new FormGroup({
    description : new FormControl(null , Validators.required ),
    dateDebuit : new FormControl( null , Validators.required ),
    dateFin : new FormControl( null , Validators.required ),
    etat : new FormControl( null , Validators.required ),
    idResponsable : new FormControl( null , Validators.required ),
    idExercise : new FormControl( null , Validators.required ),
    typeActivity : new FormControl( null , Validators.required ),
  })
  constructor( private route : Router ,private activityService :ActivityService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.activityService.addData(this.activityForm.value).subscribe(res=>{
      this.route.navigateByUrl('/admin/listActivity')
    })
  }
}
