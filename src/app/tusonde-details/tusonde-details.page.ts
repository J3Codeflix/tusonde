import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tusonde } from '../@core/models/tusonde/tusonde.model';
import { TusondeService } from '../@core/services/tusonde/tusonde.service';

@Component({
  selector: 'app-tusonde-details',
  templateUrl: './tusonde-details.page.html',
  styleUrls: ['./tusonde-details.page.scss'],
})
export class TusondeDetailsPage implements OnInit {
  tusonde: Tusonde;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tusondeService: TusondeService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      
      (async () => {
        try {
          this.tusonde = await this.tusondeService.getOne(params.id);
          console.log('🚀 ~ file: tusonde-details.page.ts ~ line 25 ~ TusondeDetailsPage ~ this.tusonde', this.tusonde);
        } catch (error) {
          console.error('🚀 ~ file: tusonde-details.page.ts ~ line 26 ~ TusondeDetailsPage ~ error', error);
        }
      })();
    });
  }

}
