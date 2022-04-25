import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';
import { AccountService } from '../service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService :TokenService, 
              private accountService :AccountService,
              private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
     if (!this.tokenService.loggedIn()) {
       
       this.tokenService.remove()
       this.accountService.changeStatus(false)
       this.router.navigateByUrl("/login")
       return false
       
     }
     return true
  }
  
}
