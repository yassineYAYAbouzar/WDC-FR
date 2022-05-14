import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { NotFoundErrorPage } from 'src/app/common/not-found';
import { ActivityService } from '../../../service/activity/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  listActivity : any
  constructor(private activityService : ActivityService) { }

  ngOnInit(): void {
    this.activityService.fetchDataList().subscribe(res=>{
      this.listActivity = res
    })
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
