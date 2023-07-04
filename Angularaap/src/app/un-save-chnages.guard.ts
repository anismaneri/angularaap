import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnSaveCHnagesGuard implements CanDeactivate< AdduserComponent> {
  

  
  canDeactivate( Component: AdduserComponent) {
    if(Component.userName.dirty) {
      return window.confirm('You have unsaved changes. Are you sure want to navigate?');
    } else{
      return true;
    }
  }
}
