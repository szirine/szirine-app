import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
	public auth: AuthenticationService,
	public router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise( (resolve, reject) => {
      this.auth.isAuthenticated()
      .then( isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['login']);
        }
        resolve(true);
      })
      .catch( error => {
        return (false);
      });
    });
  }
}
