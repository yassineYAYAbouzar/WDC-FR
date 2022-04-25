import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AlredyAuthGuard implements CanActivate {
  constructor(private tokenService :TokenService, 
    private router:Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean  {
        if (this.tokenService.loggedIn()) {
            this.router.navigateByUrl('')
        return false
        }
        return true
    } 

  
}
