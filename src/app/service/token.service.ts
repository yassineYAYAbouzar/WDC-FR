import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  set(data : any){
    localStorage.setItem('token' , data.token)
    localStorage.setItem('id' , data.id)
  }
  handle(data : any){
    this.set(data)
  }
  getTocken(){
    return localStorage.getItem('token')
  }
  getId(){
    return localStorage.getItem('id')
  }
  remove(){
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
  decode(paylod :any){
    return JSON.parse(atob(paylod));
  }
  payload(token :string){
    const payload = token.split('.')[1]
    return this.decode(payload)
  }
  isValid(){
    const token = this.getTocken()
    const id = this.getId()
    if(token){
      const payload = this.payload(token)
      if(payload){
        return id == payload.id
      }
    }
    return false
  }


  getInfo(){
    const token = this.getTocken()
    if(token){
      const payload = this.payload(token)
      return payload ? payload : null
    }
    return null
  }

  loggedIn(){
    return this.isValid()
  }

}
