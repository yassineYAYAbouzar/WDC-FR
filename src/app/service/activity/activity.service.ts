import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService  extends DataService{


  constructor( httpClient  : HttpClient) {
    super("http://127.0.0.1:8081/api/v1/responsable/activity" , "activityList" , httpClient)
  }

}