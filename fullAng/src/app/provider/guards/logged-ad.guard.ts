import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedAdGuard implements CanActivate {
  constructor(private _global:GlobalService,private  _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(!localStorage.getItem('testToken') || (!this._global.isAuthAdmin && ! this._global.isAdmin)){
        this._router.navigateByUrl('/admin')
        return false
      }
    return true;
  }
  
}
