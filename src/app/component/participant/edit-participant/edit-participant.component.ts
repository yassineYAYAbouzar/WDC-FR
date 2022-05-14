import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParticipantService } from '../../../service/participant/participant.service';

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.sass']
})
export class EditParticipantComponent implements OnInit {
  participant!: any; 

  participantForm= new FormGroup({
    nom : new FormControl(null , Validators.required ),
    prenom : new FormControl( null , Validators.required ),
    email : new FormControl( null , Validators.required ),
    telephone : new FormControl( null , Validators.required ),
    domaine : new FormControl( null , Validators.required ),
    password : new FormControl( null , Validators.required ),
  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private route : Router ,
    private participantService : ParticipantService) { }

    ngOnInit(): void {
      console.log("this.responsable")
      this.getParticipant()
    }
    getParticipant(){
      this.activatedRoute.params.subscribe((params: Params) => {
        this.participantService.fetchDataById(params['id']).subscribe(res=>{
          this.participant = res
          console.log(res)
        })
      });
    }
    onSubmit(){
      this.activatedRoute.params.subscribe((params: Params) => {
        this.participantService.updateDataById(params['id'],this.participantForm.value).subscribe(res=>{
          this.route.navigateByUrl('/admin/listParticipant')
        })
      });
    }
}
