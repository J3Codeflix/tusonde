import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTusondeDetailsPageRoutingModule } from './my-tusonde-details-routing.module';

import { MyTusondeDetailsPage } from './my-tusonde-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTusondeDetailsPageRoutingModule
  ],
  declarations: [MyTusondeDetailsPage]
})
export class MyTusondeDetailsPageModule {}
