import { Component } from '@angular/core';
import { UserProfile } from '../@core/models/auth/user.model';
import { AuthService } from '../@core/services/auth/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentUser: UserProfile = null;

  constructor(private authService: AuthService) {
    (async () => {
      try {
        this.currentUser = await this.authService.getUserProfile();
      } catch (error) {
        console.error('🚀 ~ file: tab3.page.ts ~ line 18 ~ Tab3Page ~ error', error);
      }
    })();
  }

}
