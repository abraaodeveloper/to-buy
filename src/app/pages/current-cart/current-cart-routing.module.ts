import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentCartPage } from './current-cart.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentCartPageRoutingModule {}
