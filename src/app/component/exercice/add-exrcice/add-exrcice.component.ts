import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciceActivityService } from '../../../service/exercice/exercice-activity.service';

@Component({
  selector: 'app-add-exrcice',
  templateUrl: './add-exrcice.component.html',
  styleUrls: ['./add-exrcice.component.css']
})
export class AddExrciceComponent implements OnInit {
  exerciceForm= new FormGroup({
    annee : new FormControl(null , Validators.required ),
    dateDebuit : new FormControl( null , Validators.required ),
    dateFin : new FormControl( null , Validators.required ),
    status : new FormControl( null , Validators.required ),
  })
  constructor( private route : Router ,private exerciceService :ExerciceActivityService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.exerciceService.addData(this.exerciceForm.value).subscribe(res=>{
      this.route.navigateByUrl('/admin/listExrcice')
    })
  }
}
