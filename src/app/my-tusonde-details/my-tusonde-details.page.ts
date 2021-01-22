import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tusonde } from '../@core/models/tusonde/tusonde.model';
import { ToastService } from '../@core/services/toast/toast.service';
import { TusondeService } from '../@core/services/tusonde/tusonde.service';

@Component({
  selector: 'app-my-tusonde-details',
  templateUrl: './my-tusonde-details.page.html',
  styleUrls: ['./my-tusonde-details.page.scss'],
})
export class MyTusondeDetailsPage implements OnInit {
  tusonde: Tusonde;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tusondeService: TusondeService,
    private toastService: ToastService,
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

  showComingSoon() {
    this.toastService.show('Coming soon.');
  }
}
