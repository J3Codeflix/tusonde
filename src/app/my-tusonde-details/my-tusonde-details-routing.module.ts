import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTusondeDetailsPage } from './my-tusonde-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyTusondeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTusondeDetailsPageRoutingModule {}
