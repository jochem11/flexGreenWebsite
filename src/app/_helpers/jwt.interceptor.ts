import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_services/authentication.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private http : HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const verUrl = `${environment.apiUrl}v1/auth/token/verify/`
    const refUrl = `${environment.apiUrl}v1/auth/token/refresh/`
    const user = this.authenticationService.userValue;
    const isLoggedIn = user?.access;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      if ((request.url != verUrl) && (request.url != refUrl)) {
        this.http.post(`${environment.apiUrl}v1/auth/token/verify/`, { "token": user.access }).subscribe({
          next: (data: any) => {},
          error: (error: { message: any; }) => {
            this.http.post(`${environment.apiUrl}v1/auth/token/refresh/`, { "refresh": user.refresh }).subscribe({
              next: (data:any) => {
                user.access = data.access;
              },
              error: (error: {message: any}) => {
                this.authenticationService.logout();
              }
            })
          }
        });
      }

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.access}`
        }
      });
    }

    return next.handle(request);
  }
}
