import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuardService implements CanLoad {

  constructor(
    private router: Router,
    private authenticationService: AuthService,
  ) { }

  async canLoad(route: Route, segments: UrlSegment[]) {
    try {
      const isRegistered = await this.authenticationService.isRegistered();
      if (isRegistered) {
        await this.router.navigate([ '/tabs/tab2' ]);
      }
  
      return true;
    } catch (error) {
      console.error('🚀 ~ file: can-load-guard.service.ts ~ line 28 ~ CanLoadGuardService ~ canLoad ~ error', error);
      return false;
    }
  }
}
