import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { NotFoundErrorPage } from 'src/app/common/not-found';
import { TokenService } from 'src/app/service/token.service';
import { ActivityService } from '../../../service/activity/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  listActivity : any
  constructor(private activityService : ActivityService , private tokenService : TokenService) { }

  ngOnInit(): void {
    this.activityService.fetchDataList().subscribe(res=>{
      this.listActivity = res
    })
  }
  isResponsable() : Boolean{
    return this.tokenService.isResponsable()
  }
  delete(respo : any){
    this.activityService.deleteData(respo).subscribe(res=>{
      this.listActivity.splice(this.listActivity.indexOf(res))
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
