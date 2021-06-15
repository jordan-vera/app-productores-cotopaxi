import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorShowPageRoutingModule } from './productor-show-routing.module';

import { ProductorShowPage } from './productor-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorShowPageRoutingModule
  ],
  declarations: [ProductorShowPage]
})
export class ProductorShowPageModule {}
