import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient  : HttpClient) { }

  onSubmit(data : {username : string , password : string}){
    return this.httpClient.post("http://localhost:8081/login" , data)
  }
  onRegister(data : {nom : string , prenom : string ,email : string , telephone : string , domaine : string , password : string , structure : string}){
    return this.httpClient.post("http://127.0.0.1:8081/api/v1/auth/register" , data)
  }
}
