import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService :TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.tokenService.getTocken() ? 
    request = request.clone({
      setHeaders:{
        Authorization : `Bearer ${this.tokenService.getTocken()}`
      }
    })
    :
    request = request.clone({
     
    })
    return next.handle(request);
  }
}
