import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotFoundErrorPage } from 'src/app/common/not-found';
import { AppError } from '../common/app-error';
import { Inject } from '@angular/core';
import { InvalidData } from '../common/invalid-date';
import { ServerDown } from '../common/server-down';
@Injectable()
export class DataService {

  constructor(@Inject(String) private url: string,@Inject(String) private uri: string, private httpClient  : HttpClient) { }
  
  fetchDataList() {
    return this.httpClient.get(`${this.url}/${this.uri}`).pipe(
      retry(1), catchError(this.errorHandler));
  }
  fetchDataById(id : BigInteger) {
    return this.httpClient.get(`${this.url}/${id}`).pipe(
      retry(1), catchError(this.errorHandler));
  }
  updateDataById(id : BigInteger , data : {nom : string , prenom : string ,email : string , telephone : string , domaine : string , password : string , typeResponsable : string , etat : string}) {
    return this.httpClient.patch(`${this.url}/${id}`,data).pipe(
      retry(1), catchError(this.errorHandler));
  }
  addData(data : {nom : string , prenom : string ,email : string , telephone : string , domaine : string , password : string , typeResponsable : string , etat : string}) {
    return this.httpClient.post(`${this.url}/`,data).pipe(
      retry(1), catchError(this.errorHandler));
  }
  deleteData(id : Number) {
    return this.httpClient.delete(`${this.url}/${id}`)
    .pipe(
      retry(1), catchError(this.errorHandler));
  }
  private errorHandler(error : Response) {
    if(error.status === 404){
      return throwError(new NotFoundErrorPage);
    }
    if(error.status === 500){
      return throwError(new ServerDown);
    }
    if(error.status === 400){
      return throwError(new InvalidData);
    }
    return throwError(new AppError);
  }
}
