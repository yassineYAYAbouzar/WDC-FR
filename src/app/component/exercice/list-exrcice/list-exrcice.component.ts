import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { NotFoundErrorPage } from 'src/app/common/not-found';
import { ExerciceActivityService } from '../../../service/exercice/exercice-activity.service';
import { TokenService } from '../../../service/token.service';

@Component({
  selector: 'app-list-exrcice',
  templateUrl: './list-exrcice.component.html',
  styleUrls: ['./list-exrcice.component.css']
})
export class ListExrciceComponent implements OnInit {

  listExercice : any
  constructor(private ExerciceService : ExerciceActivityService ,private tokenService : TokenService) { }

  ngOnInit(): void {
    this.ExerciceService.fetchDataList().subscribe(res=>{
      this.listExercice = res
    })
  }

  isResponsable() : Boolean{
    return this.tokenService.isResponsable()
  }
  delete(respo : any){
    this.ExerciceService.deleteData(respo).subscribe(res=>{
      this.listExercice.splice(this.listExercice.indexOf(res))
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
