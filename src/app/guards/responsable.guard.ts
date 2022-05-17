import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';
import { AccountService } from '../service/account.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsableGuard implements CanActivate {
private authorities  : any
  constructor(private tokenService :TokenService, 
              private accountService :AccountService,
              private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      
      this.authorities = this.tokenService.getInfo()?.authorities[6]
      console.log(this.authorities?.authority)
    if(this.authorities?.authority != 'ROLE_RESPONSABLE'){
      this.router.navigateByUrl("/participant")
      return false
     }
     return true
  }
  
}
