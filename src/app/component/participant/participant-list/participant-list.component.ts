import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { NotFoundErrorPage } from 'src/app/common/not-found';
import { ParticipantService } from '../../../service/participant/participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participantList : any
  constructor(private participantService : ParticipantService) { }

  ngOnInit(): void { 
    this.participantService.fetchDataList().subscribe(res=>{
      this.participantList = res
    })
  }

  delete(partic : any){
    this.participantService.deleteData(partic).subscribe(res=>{
      console.log(partic)
      this.participantList.splice(this.participantList.indexOf(res))
    },(this.errorHandler))
  }
  private errorHandler(error : AppError) {
    if(error instanceof NotFoundErrorPage){
      console.log("deja")
      console.log(error)
    }else{
      console.log("not deja")
    }
  }
}
