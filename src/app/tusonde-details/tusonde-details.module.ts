import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TusondeDetailsPageRoutingModule } from './tusonde-details-routing.module';

import { TusondeDetailsPage } from './tusonde-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TusondeDetailsPageRoutingModule
  ],
  declarations: [TusondeDetailsPage]
})
export class TusondeDetailsPageModule {}
