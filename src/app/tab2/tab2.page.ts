import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Tusonde } from '../@core/models/tusonde/tusonde.model';
import { AuthService } from '../@core/services/auth/auth.service';
import { TusondeService } from '../@core/services/tusonde/tusonde.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tusondes: Tusonde[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private tusondeService: TusondeService,
  ) {
    (async() => {
      try {
        const userProfile = await this.authService.getUserProfile();
        this.tusondes = await this.tusondeService.getAllPerUser(userProfile.user.ID);
      } catch (error) {
        console.log('🚀 ~ file: tab4.page.ts ~ line 18 ~ Tab4Page ~ error)', error);
      }
    })();
  }

  viewTusondeDetails(id: string) {
    this.router.navigate([ `/tusonde-details/${id}` ]);
  }
}
