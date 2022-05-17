import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';
import { AccountService } from '../service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
private authorities  : any
  constructor(private tokenService :TokenService, 
              private accountService :AccountService,
              private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      
      this.authorities = this.tokenService.getInfo()?.authorities[6]
      console.log(this.authorities?.authority)
    if(this.authorities?.authority != 'ROLE_ADMIN'){
      this.router.navigateByUrl("/responsable")
      return false
     }
     return true
  }
  
}
