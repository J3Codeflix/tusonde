import { Component } from '@angular/core';
import { Tusonde } from './services/models/tusonde/tusonde.model';
import { TusondeService } from './services/tusonde/tusonde.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  tusondes: Tusonde[] = [];

  constructor(private tusondeService: TusondeService) {
    (async() => {
      try {
        this.tusondes = await this.tusondeService.getAll();
      } catch (error) {
        console.log('🚀 ~ file: tab4.page.ts ~ line 18 ~ Tab4Page ~ error)', error);
      }
    })();
  }

}
