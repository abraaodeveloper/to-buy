import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentCartPageRoutingModule } from './current-cart-routing.module';

import { CurrentCartPage } from './current-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentCartPageRoutingModule
  ],
  declarations: [CurrentCartPage]
})
export class CurrentCartPageModule {}
