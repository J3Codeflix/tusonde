import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTusondePage } from './new-tusonde.page';

const routes: Routes = [
  {
    path: '',
    component: NewTusondePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTusondePageRoutingModule {}
