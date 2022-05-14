import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../../../service/responsable/responsable.service';
import { AppError } from '../../../common/app-error';
import { NotFoundErrorPage } from '../../../common/not-found';

@Component({
  selector: 'app-responsable-list',
  templateUrl: './responsable-list.component.html',
  styleUrls: ['./responsable-list.component.css']
})
export class ResponsableListComponent implements OnInit {

  listResponsable : any
  constructor(private responsableService : ResponsableService) { }

  ngOnInit(): void {
    this.responsableService.fetchDataList().subscribe(res=>{
      this.listResponsable = res
    })
  }

  delete(respo : any){
    this.responsableService.deleteData(respo).subscribe(res=>{
      console.log(respo)
      this.listResponsable.splice(this.listResponsable.indexOf(res))
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
