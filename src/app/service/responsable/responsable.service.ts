import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  responsableList = null

  constructor(private httpClient  : HttpClient) { }
  fetchResponsableList() {
    return this.httpClient.get('http://127.0.0.1:8081/api/v1/admin/responsableList');
  }
}
