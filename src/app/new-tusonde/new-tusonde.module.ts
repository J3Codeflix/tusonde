import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTusondePageRoutingModule } from './new-tusonde-routing.module';

import { NewTusondePage } from './new-tusonde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewTusondePageRoutingModule
  ],
  declarations: [NewTusondePage]
})
export class NewTusondePageModule {}
