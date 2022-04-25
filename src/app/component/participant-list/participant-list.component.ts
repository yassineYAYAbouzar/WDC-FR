import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../service/participant/participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  constructor(private participantService : ParticipantService) { }

  participantList : any
  
  ngOnInit(): void {
    this.participantService.fetchParticipantList().subscribe(res=>{
      this.participantList = res
    })
  }
  update(respo : any){
    console.log(respo)
  }
  delete(respo : any){
    console.log(respo)
  }

}
